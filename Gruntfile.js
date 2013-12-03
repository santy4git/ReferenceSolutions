/**
 * Grunt build/deployment script for Echo Reference Solutions.
 *
 * Environment setup:
 * 1. npm install
 * 2. Create local grunt-aws.json with AWS credentials. See sample below.
 * 3. Run "grunt deploy" to update production.
 *
 * Sample grunt-aws.json:
 *
 *   {
 *     "key": "AWSACCESSKEY",
 *     "secret": "AWSSECRETKEY",
 *     "bucket": "AWSBUCKET",
 *     "distribution": "CLOUDFRONTDISTRIB"
 *   }
 *
 */

module.exports = function(grunt) {
    "use strict";

    var apps = [ "gallery" ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: [ 'package.json' ],
                createTag: false,
                push: true,
                pushTo: 'upstream',
            }
        },
        aws: grunt.file.readJSON('grunt-aws.json'),
        aws_s3: {
            options: {
                accessKeyId: '<%= aws.key %>',
                secretAccessKey: '<%= aws.secret %>',
                uploadConcurrency: 5,
                downloadConcurrency: 5,
            },
            production: {
                options: {
                    bucket: '<%= aws.bucket %>',
                    differential: true
                },
                files: [
                    //{dest: 'apps/', cwd: 'backup/staging/', action: 'download'},
                    {expand: true, cwd: 'apps/', src: ['**'], dest: 'apps/'},
                    {expand: true, cwd: 'polyfills/', src: ['**'], dest: 'polyfills/'},
                    {expand: true, cwd: 'controls/', src: ['**'], dest: 'controls/'},
                    //{dest: 'src/app', action: 'delete'},
                ]
            },
        },
        invalidate_cloudfront: {
            options: {
                key: '<%= aws.key %>',
                secret: '<%= aws.secret %>',
                distribution: '<%= aws.distribution %>'
            },
            production: {
                files: [{
                    expand: true,
                    cwd: './apps/',
                    src: ['**/*.js', '**/*.json'],
                    filter: 'isFile',
                    dest: 'apps/'
                }]
            }
        },
        html2js: {
            options: {
                base: "apps",
                target: "js",
                rename: function (moduleName) {
                    return '/' + moduleName.replace('.tpl.html', '');
                },
                fileHeaderString: "/* Generated by Grunt, do not edit directly. */",
                useStrict: true
            },
            main: {
                src: ['apps/**/*.tpl.html'],
                dest: 'apps/dashboard-templates.js'
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-invalidate-cloudfront');
    grunt.loadNpmTasks('grunt-html2js');

    // Default task
    grunt.registerTask('default', [ ]);

    // Watch dev files for recompilation requirements
    grunt.registerTask('watch', [ 'watch' ]);

    // TODO: Should do a TIDY here. Our template processing is pretty crude, and
    // we don't handle these like unclosed-SELECT elements very well.
    grunt.registerTask('cc', [ 'html2js' ]);

    // Dev deployments
    grunt.registerTask('deploy-dev', [ 'cc', 'aws_s3' ]);

    // Prod deployments
    grunt.registerTask('deploy-prod', [ 'cc', 'aws_s3', 'invalidate_cloudfront' ]);
};
