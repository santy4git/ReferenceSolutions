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

    // The classes are for CSS targeting for specific polls. The ID is because
    // in Echo there is no way to take a DOM element and get back to the Stream
    // Item that rendered it. We cache a copy of the data value we need out in
    // the DOM so we can record votes for the right option IDs. We use attr()
    // so we can see the value in the Inspector for debugging.
    item.set('echo-id', id);
    item.config.get('target').addClass(elements.pop() + ' ' + elements.pop())
                             .attr('data-echo-id', id);

    // If this option is empty, hide it
    // TODO: We should probably look for a cleaner way to do this, like
    // stripping tags and looking for text. Just a little whitespace could throw
    // this off - too much "magic".
    if (item.data.object.content == '<div class="answer"></div>') {
        item.config.get('target').hide();
        item.set('valid', false);
    } else {
        item.set('valid', true);
    }

    // Learned something new today. You cannot do this - only one will work!
    //this.extendTemplate('insertAfter', 'body', plugin.templates.resultText);
    //this.extendTemplate('insertAfter', 'body', plugin.templates.resultBar);
    this.extendTemplate('insertAsFirstChild', 'body', plugin.templates.results);
    this.extendTemplate('insertAfter', 'children', plugin.templates.clear);
};

/**
 * Width-based result bar and text field.
 *
 * @echo_template
 */
plugin.templates.results = '<div class="{plugin.class:resultBar}"></div>' +
                           '<div class="{plugin.class:resultText}"></div>';

/**
 * Clearfix bar under the floated elements.
 * TODO: Change to a real clearfix?
 *
 * @echo_template
 */
plugin.templates.clear = '<div style="clear: both"></div>';

/**
 * Hook up the vote submit event.
 */
plugin.component.renderers.body = function(element) {
    var plugin = this,
        item = this.component;

    element = this.parentRenderer('body', element);

    // TODO: Gah, why does it have to be so hard to get from the Item to the
    // Stream???
    // TODO: Avoid conflicts between social and API-based voting...
    $(element).click(function(e) {
        e.preventDefault();
        if (item.depth == 1) {
            // Events are the only way we know of right now...
            plugin.events.publish({
                topic: 'onManualVote',
                data: {
                    id: item.get('echo-id')
                }
            });
        }
    });

    return element;
}

plugin.css =
	// These are styles shared by all of the visualizations, or only minimally
	// overridden... We wanted to put them in app.js but the substitutions for
    // Stream.Item don't work there.

    '.{plugin.class} .{class:body} { padding-top: 0; background: #111; margin: 0 0 5px 0; }' +
    '.{plugin.class} .{class:children} .{class:body} { padding-bottom: 40px; position: relative; line-height: 40px; font-size: 18px; }' +
    '.{plugin.class} .{class:children} .{class:body}:hover { cursor: pointer; background: #333; }' +

	'.{plugin.class} .title, ' +
	'.{plugin.class} .question { padding: 7px 10px; color: #fff; font-size: 18px; line-height: 22px; text-transform: uppercase; }' +

	'.{plugin.class} .{class:authorName}, ' +
	'.{plugin.class} .{class:expandChildren}, ' +
	'.{plugin.class} .{class:childrenMarker}, ' +
	'.{plugin.class} .{class:footer}, ' +
    '.{plugin.class} .{class:modeSwitch}, ' +
	'.{plugin.class} .{class:avatar-wrapper} { display: none !important; }' +

	'.{plugin.class} .{class:subwrapper} { margin: 0; }' +
    '.{plugin.class} .{class:container-root-thread} { padding: 0; }' +
	'.{plugin.class} .{class:depth-1} { margin: 0; padding: 0; background-color: transparent; }' +

    '.{plugin.class} .answer span,' +
    '.{plugin.class} .{class:children} .{plugin.class:resultBar},' +
    '.{plugin.class} .{class:children} .{plugin.class:resultText} { display: block; position: absolute; bottom: 0; height: 40px; }' +

    '.{plugin.class} .answer span { left: 7px; z-index: 3; }' +
    '.{plugin.class} .{class:children} .{plugin.class:resultText} { right: 7px; z-index: 2; }' +
    '.{plugin.class} .{class:children} .{plugin.class:resultBar} { left: 0; z-index: 1; background-color: #417dc1; }' +
    '.{plugin.class} .{class:children} .selected .{plugin.class:resultBar} { background-color: #ea9101; }' +

	'.{plugin.class} .echo-primaryColor { color: #fff; }' +

    // TODO: Making classe targets where we want to use parts of both the Stream
    // and the Stream Item in our rule is almost impossible. This is a bad rule,
    // but what choice do we have?
    '.echo-apps-poll .showing-results .{class:children} .{plugin.class:resultBar} { border-right: 1px solid #fff; }' +

    // Some responsive styling. Note that since phone resolutions are now all
    // over the place we deliberately used widths IN BETWEEN their typical sizes
    // to help make sure we get the edge cases.
    '@media all and (max-width: 900px) {'+
        '.{plugin.class} .answer span,' +
        '.{plugin.class} .{class:children} .{plugin.class:resultBar},' +
        '.{plugin.class} .{class:children} .{plugin.class:resultText} { height: 34px; }' +

        '.{plugin.class} .{class:children} .{class:body} { padding-bottom: 34px; line-height: 34px; font-size: 16px; }' +

        '.{plugin.class} .title, ' +
        '.{plugin.class} .question { padding: 6px 10px; font-size: 16px; line-height: 20px; }' +
    '}' +

    '@media all and (max-width: 600px) {'+
        '.{plugin.class} .answer span,' +
        '.{plugin.class} .{class:children} .{plugin.class:resultBar},' +
        '.{plugin.class} .{class:children} .{plugin.class:resultText} { height: 28px; }' +
        '.{plugin.class} .{class:children} .{class:body} { padding-bottom: 28px; line-height: 28px; font-size: 14px; }' +

        '.{plugin.class} .title, ' +
        '.{plugin.class} .question { padding: 5px 10px; font-size: 14px; line-height: 18px; }' +
    '}' +

    '@media all and (max-width: 400px) {'+
        '.{plugin.class} .answer span,' +
        '.{plugin.class} .{class:children} .{plugin.class:resultBar},' +
        '.{plugin.class} .{class:children} .{plugin.class:resultText} { height: 24px; }' +
        '.{plugin.class} .{class:children} .{class:body} { padding-bottom: 24px; line-height: 24px; font-size: 13px; }' +

        '.{plugin.class} .title, ' +
        '.{plugin.class} .question { padding: 4px 10px; font-size: 13px; line-height: 16px; }' +
    '}' +

	'';

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

plugin.dependencies = [{
    loaded: function() { return !!window.twttr; },
    url: '//platform.twitter.com/widgets.js'
}, {
    url: '//echocsthost.s3.amazonaws.com/plugins/jstorage.min.js'
}];

/**
 * Periodically get updated vote counts.
 *
 * TODO: Refactor.
 */
plugin.init = function() {
    var plugin = this,
        stream = this.component;

    // Hook the Twitter 'tweet' Intent. When it's fired, if it points to one of
    // our options, mark the poll as having been voted-on, and fire and event
    // so the visualizations can show their results (if they're going to).
    //
    // TODO: This will probably not work if there is more than one Twitter-based
    // poll on the page...
    if (!!window.twttr) {
        twttr.events.bind('tweet', function (event) {
            if (event.type == 'tweet' && event.region == 'intent') {
                var $el = $(event.target);
                if (!$el.hasClass('answer')) return;

                var $item = $el.closest('.echo-streamserver-controls-stream-item'),
                    id = $item.data('echo-id');

                plugin._recordVote(id);
            }
        });
    }

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

                plugin.updateResults();
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
        this.updateResults();
    },
    'Echo.StreamServer.Controls.Stream.onRefresh': function(entry) {
        this.updateResults();
    },
    'Echo.StreamServer.Controls.Stream.Item.Plugins.VoteDataProcessor.onManualVote':
    function(topic, args) {
        // TODO: Gah...
        var optionId = args.item.data.object.id,
            pollId = this.component.threads[0].data.object.id;

        // Check for dupe votes. This is very primitive! TODO: Make better.
        // TODO: Also, this might fail with multiple polls on one page?
        if (this._getVote(pollId)) {
            return;
        }

        this._recordVote(optionId);

        var content = {
            verb: 'post',
            // Note: We used to put the pollID and optionID in the vote content.
            // But ESP finds these as links and resolves them to additional
            // targets so it turns out that's a bad idea...
            content: 'API-based vote', // for '+pollId+' option '+optionId,
            target: optionId
        };

        var data = {
            // TODO: There must be a better way to do this...
            appkey: this.component.config.data.appkey
                        .replace('streamserver', 'submit'),
            sessionID: Backplane.getChannelID(),
            content: Echo.Utils.objectToJSON(content)
        };

        // TODO: Record the vote, too
        $.ajax({
            url: '//apps.echoenabled.com/apps/esp/activity',
            timeout: 5000,
            data: data,
            success: function(data) {
                //console.log('success', data);
            },
            error: function(data) {
                //console.log('error', data);
            }
        });

        // Purge the view as well
        // TODO: Is this acceptable?
        var query = this.component.config.data.query,
            appkey = this.component.config.data.appkey;
        $.get('http://api.echoenabled.com/v1/admin/purge-view?q=' + query +
              '&appkey=' + appkey, function(data) {
            // Do nothing
        });

        this.updateResults();
    }
};

/**
 * Helper method to determine whether we've voted already.
 *
 * NOTE: We are using jStorage for localStorage/cookie support here as a "basic"
 * have-we-voted implementation. In a future version we may want to revisit this
 * to provide something harder to fake. If the customer is willing to "spend" an
 * API call on page load, we could go look for our submission (for API-based
 * polls anyway).
 */
plugin.methods._getVote = function(poll) {
    var id = this._mungeId(poll);
    return $.jStorage.get(id, null);
}

/**
 * Helper method to set the flags when we vote.
 *
 * TODO: We have hard-coded this to expire in 30 days - make it an option?
 */
plugin.methods._recordVote = function(answer) {
    var plugin = this,
        stream = this.component,
        poll = stream.threads[0],
        id = this._mungeId(poll.data.object.id);

    // Remember it for reloads
    $.jStorage.set(id, answer, { TTL: 30 * 86400 * 1000 });

    // Mark the item as having been selected
    $.map(this.component.threads[0].children, function(item) {
        if (item.data.object.id == answer) {
            item.config.get('target').addClass('selected');
            item.set('selected', true);
        }
    });

    stream.config.get('target').addClass('voted');
    stream.set('voted', true);
    if (stream.config.get('display.showResults') == 'after') {
        plugin.updateResults();
    }

    // Post an event so others can update themselves.
    plugin.events.publish({
        topic: 'onVoted',
        data: {
            method: 'twitter-intent',
            stream: stream,
            poll: poll,
            answer: answer
        }
    });
}

/**
 * Convert an Echo ID URI into something more friendly for storage. Produces a
 * cookie-key-friendly but still relatively unique key like the following:
 *
 *   _echoPoll_cst_dev_echoplatform_com_sample_data_polls_conanwatch
 *
 * TODO: code cleanup once we know what we want.
 */
plugin.methods._mungeId = function(id) {
    return '_echoPoll_' + id.replace('http://', '')
                            .replace('https://', '')
                            .replace(/[\.,-\/#!$%\^&\*;:{}=\-`~()]/g, '_');
}

/**
 * Process the stream data. Called by the event handlers, and may also be called
 * manually.
 */
plugin.methods.updateResults = function() {
    var plugin = this,
        stream = this.component,
        poll = stream.threads[0],
        voteCount = 0,
        validCount = 0,
        showResults = false;

    if (!poll) return;

    // Have we already voted?
    var myVote = this._getVote(poll.data.object.id);
    if (!stream.get('showResults')) {
        if (stream.config.get('display.showResults') == 'before' ||
            (stream.config.get('display.showResults') == 'after' && myVote)) {
            stream.config.get('target').addClass('voted');
            stream.set('showResults', true);
            stream.config.get('target').addClass('showing-results');
        }
    }

    // We need to iterate the items twice - luckily there aren't many. The first
    // time through we find the totals, so we can calculate percentages later.
    $.map(poll.children, function(item) {
        var votes = item.get('data.object.accumulators.repliesCount', 0);

        if (item.data.object.id == myVote) {
            item.config.get('target').addClass('selected');
            item.set('selected', true);
            votes++;
        } else {
            item.set('selected', false);
        }

        item.set('votes', votes);

        if (item.get('valid')) {
            validCount++;
            voteCount += votes;
        }
    });

    // Now set percentages to support other plugins like visualizations.
    stream.set('voteCount', voteCount);
    $.map(poll.children, function(item) {
        var showPercent = item.config.get('parent.display.percent'),
            showCount = item.config.get('parent.display.count'),
            resultText = '',
            votes = item.get('votes');

        // Actual percentage value
        var percentage = (voteCount > 0)
                            ? (100 * votes / voteCount)
                            : (validCount > 0) ? (100 / validCount) : 0;

        // Displayable text label
        if (showPercent && showCount) {
            resultText = Math.round(percentage) + '%' +
                         ' (' + plugin._formatCount(votes) + ')';
        } else if (showPercent) {
            resultText = Math.round(percentage) + '%';
        } else {
            resultText = plugin._formatCount(votes);
        }

        item.set('percentage', percentage);
        item.set('resultText', resultText);
    });

    // There's nothing further for us to do until we're ready to show results
    if (!stream.get('showResults')) {
        return;
    }

    // For each child, look for a result Bar and result Text view. Note that
    // some visualizations may hide these and show their own.
    $.map(stream.threads[0].children, function(item, i) {
        var $text = item.plugins.VoteDataProcessor.view.get('resultText'),
            $bar = item.plugins.VoteDataProcessor.view.get('resultBar');

        // Display the value, and also set it as a convenience for non-default
        // visualizations.
        $text.html(item.get('resultText'));

        // jQuery sets overflow:hidden during animations, and we're using
        // overflow to position the buttons.
        $bar.animate({
            width: item.get('percentage') + '%'
        }, {
            duration: 2000,
            queue: false,
            step: function() {
                $bar.css({ overflow: 'visible' });
            },
            complete: function() {
                $bar.css({ overflow: 'visible' });
            }
        });
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
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

Echo.Plugin.create(plugin);

})(Echo.jQuery);
