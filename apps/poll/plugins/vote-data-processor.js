(function(jQuery) {
'use strict';

var $ = jQuery;

/**
 * @class Echo.StreamServer.Controls.Stream.Item.Plugins.VoteDataProcessor
 * Post-process arriving poll items to add useful elements to them. These are
 * shared by all poll visualizations.
 *
 * @extends Echo.Plugin
 */
var plugin = Echo.Plugin.manifest('VoteDataProcessor',
                                  'Echo.StreamServer.Controls.Stream.Item');

if (Echo.Plugin.isDefined(plugin)) return;

plugin.dependencies = [{
    loaded: function() { return !!window.twttr; },
    url: "//platform.twitter.com/widgets.js"
}];

/**
 * Add support classes to allow targeting of specific polls and options. Note
 * that we don't do anything else here because some Item fields haven't even
 * been populated yet - important concepts like "depth" (because it has not
 * yet been rendered).
 */
plugin.init = function() {
    var item = this.component,
        id = item.get('data.object.id'),
        elements = id.split('/');

    // The classes are for CSS targeting for specific polls. The ID is so we
    // can find ourselves again if a Tweet is posted.
    item.config.get("target").addClass(elements.pop() + ' ' + elements.pop())
                             .attr('data-echo-id', id);

    if (!!window.twttr) {
        twttr.events.bind('tweet', function (event) {
            console.log(event);
            if (event.type == 'tweet' && event.region == 'intent') {
                var $el = $(event.target);
                console.log($el);
                console.log($el.data('echo-id'));
            }
        });
    }
};

Echo.Plugin.create(plugin);

})(Echo.jQuery);

(function(jQuery) {
'use strict';

var $ = jQuery;

/**
 * @class Echo.StreamServer.Controls.Stream.Plugins.VoteDataProcessor
 * Provides support methods to extract data from Stream Items for the
 * visualizations to use when rendering themselves.
 *
 * @extends Echo.Plugin
 */
var plugin = Echo.Plugin.manifest('VoteDataProcessor',
                                  'Echo.StreamServer.Controls.Stream');

if (Echo.Plugin.isDefined(plugin)) return;

/**
 * Periodically get updated vote counts.
 */
plugin.init = function() {
    var plugin = this,
        stream = this.component;

    setInterval(function() {
        if (!stream.threads[0]) return;

        var request = Echo.StreamServer.API.request({
            endpoint: 'search',
            data: {
                q: stream.config.get('query').replace(
                    ' children:',
                    ' sortOrder:repliesDescending children:'
                ),
                appkey: stream.config.get('appkey')
            },
            onData: function(data, extra) {
                var voteCounts = {};

                $.map(data.entries, function(entry) {
                    var id = entry.object.id,
                        votes = entry.object.accumulators &&
                                entry.object.accumulators.repliesCount ?
                                entry.object.accumulators.repliesCount : 0;
                    voteCounts[id] = parseInt(votes);
                });

                $.map(stream.threads[0].children, function(item) {
                    var object = item.data.object;
                    if (voteCounts[object.id]) {
                        object.accumulators.repliesCount = voteCounts[object.id];
                    }
                });

                plugin.processData();
            },
            onError: function(data, extra) {
                // TODO: What kinds of errors can we get?
                console.log(data, extra);
            }
        });

        request.send();
        // TODO: Make this interval configurable.
    }, 30000);
};

/**
 * Trigger off onRender and onRefresh events.
 */
plugin.events = {
    'Echo.StreamServer.Controls.Stream.onRender': function(entry) {
        this.processData();
    },
    'Echo.StreamServer.Controls.Stream.onRefresh': function(entry) {
        this.processData();
    }
};

/**
 * Process the stream data. Called by the event handlers, and may also be called
 * manually.
 */
plugin.methods.processData = function() {
    var plugin = this,
        stream = this.component,
        voteCount = 0;

    // First count all the votes.
    if (!stream.threads[0]) return;

    $.map(stream.threads[0].children, function(item) {
        var votes = item.get('data.object.accumulators.repliesCount', 0);
        item.set('votes', votes);
        voteCount += votes;
    });

    // Now set percentages to support other plugins like visualizations.
    stream.set('voteCount', voteCount);
    $.map(stream.threads[0].children, function(item) {
        var showPercent = item.config.get('parent.display.percent'),
            showCount = item.config.get('parent.display.count'),
            resultText = '',
            votes = item.get('votes');

        // Actual percentage value
        var percentage = (voteCount > 0)
                            ? (100 * votes / voteCount)
                            : 100 / stream.threads[0].children.length;
        item.set('percentage', percentage);

        // Displayable text label
        if (showPercent && showCount) {
            resultText = Math.round(percentage) + '% (' +
                         plugin._formatCount(votes) + ')';
        } else if (showPercent) {
            resultText = Math.round(percentage) + '%';
        } else {
            resultText = plugin._formatCount(votes);
        }

        item.set('resultText', resultText);
    });

    // Post an event so others can update themselves.
    plugin.events.publish({
        topic: 'onProcessed',
        data: {
            stream: stream
        }
    });
};

/**
 * Provides a comma-separated-thousands format display.
 */
plugin.methods._formatCount = function(count) {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Echo.Plugin.create(plugin);

})(Echo.jQuery);