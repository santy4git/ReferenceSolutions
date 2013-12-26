/* Generated by Grunt, do not edit directly. */
angular.module('templates-main', ['/gallery/dashboard', '/heatmap/dashboard', '/poll/dashboard', '/poll_cse/dashboard']);

angular.module("/gallery/dashboard", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/gallery/dashboard",
    "<!-- NOTES:\n" +
    "\n" +
    "1. You must make your app.config{} block defaults match these defaults _exactly_\n" +
    "   or you will get unexpected behaviors when your app loads. If the user leaves\n" +
    "   a field set to its default value, the field is _removed_ from the config\n" +
    "   block. So if the default is true, it will not be sent at all if the checkbox\n" +
    "   is checked. That means if you go to use it in app.js it can evaluate to false\n" +
    "   unexpectedly. See the related comment there for details.\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "<!-- APP Key -->\n" +
    "<select name=\"appkey\" required=\"required\" data-component=\"AppKeyList\" title=\"Application key\" data-help=\"Specifies the application key for this instance\" />\n" +
    "\n" +
    "<!-- Data Source -->\n" +
    "<fieldset name=\"datasource\">\n" +
    "  <legend class=\"icon-filter\">Data Source</legend>\n" +
    "\n" +
    "  <select name=\"targetURLSource\" title=\"Source of Target URL\" data-help=\"Select how the target URL is determined\">\n" +
    "    <option value=\"canonical\" selected=\"selected\">Canonical URL of Host Page</option>\n" +
    "    <option value=\"actualurl\">Actual URL of Host Page</option>\n" +
    "    <option value=\"echourl\">META echo:url Value</option>\n" +
    "    <option value=\"specific\">Specify a URL</option>\n" +
    "    <option value=\"builder\">Data Source Builder</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <!-- Only one of these options will be shown at a time -->\n" +
    "  <input name=\"specifiedURL\" type=\"text\" class=\"specified-url\" title=\"Specified URL\" data-help=\"Please specify the exact URL you wish to use.\" />\n" +
    "<!--  <input name=\"builderURL\" type=\"text\" class=\"builder-url\" data-component=\"Echo.Apps.MediaGallery.DataSourceGroup\" />-->\n" +
    "\n" +
    "  <select name=\"targetMode\" title=\"Target Mode\" data-help=\"\">\n" +
    "    <option value=\"childrenof\" selected=\"selected\">childrenof (This URL and its children)</option>\n" +
    "    <option value=\"scope\">scope (All entries targeted here)</option>\n" +
    "    <option value=\"url\">Only this URL</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <input name=\"itemsPerPage\" type=\"text\" value=\"15\" title=\"Items Per Page\" data-help=\"How many items should be shown per page?\" />\n" +
    "\n" +
    "  <input name=\"filters\" type=\"text\" value=\"\" title=\"Filters\" data-help=\"Add any marker, flag, or other filters you wish to use.\" />\n" +
    "\n" +
    "  <select name=\"safeHTML\" title=\"Safe HTML\" title=\"Safe HTML\" data-help=\"\">\n" +
    "    <option value=\"off\" selected=\"selected\">Off (All HTML allowed)</option>\n" +
    "    <option value=\"passive\">Passive (some HTML allowed)</option>\n" +
    "    <option value=\"aggressive\">Aggressive (no HTML allowed)</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <input name=\"children\" type=\"text\" value=\"0\" title=\"Children\" data-help=\"How many children should be retrieved for each item?\" />\n" +
    "\n" +
    "  <input name=\"childFilters\" type=\"text\" value=\"\" title=\"Child Filters\" data-help=\"Add any marker, flag, or other filters you wish to use.\" />\n" +
    "\n" +
    "  <select name=\"childSafeHTML\" title=\"Child Safe HTML\" data-help=\"\">\n" +
    "    <option value=\"off\" selected=\"selected\">Off (All HTML allowed)</option>\n" +
    "    <option value=\"passive\">Passive (some HTML allowed)</option>\n" +
    "    <option value=\"aggressive\">Aggressive (no HTML allowed)</option>\n" +
    "  </select>\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Display -->\n" +
    "<fieldset name=\"display\">\n" +
    "  <legend class=\"icon-picture\">Display</legend>\n" +
    "\n" +
    "  <select name=\"visualization\" title=\"Visualization\" data-help=\"Select the display mode for the gallery\">\n" +
    "    <option value=\"pinboard\" selected=\"selected\">Pinboard-style Gallery</option>\n" +
    "    <option value=\"streamlined\">Streamlined Gallery</option>\n" +
    "    <option value=\"slideshow\">Slideshow w/ Full-Screen Support</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <input name=\"sourcefilter\" type=\"checkbox\" checked=\"checked\" title=\"Display a source filter control\" data-help=\"A drop-down or similar control will be displayed that allows the user to choose the source of the media shown\" />\n" +
    "\n" +
    "  <input name=\"mincolwidth\" type=\"text\" value=\"300\" data-storage=\"number\" title=\"Minimum Column Width\" data-help=\"To support responsive layouts, columns will dynamically resize down to this minimum width.\" />\n" +
    "\n" +
    "  <input name=\"replies\" type=\"checkbox\" checked=\"checked\" title=\"Allow users to post replies\" data-help=\"Check to display replies for each item and provide an ability for the users to post their replies\" />\n" +
    "  <input name=\"likes\" type=\"checkbox\" checked=\"checked\" title=\"Allow users to Like items\" data-help=\"Check to enable Likes for the items\" />\n" +
    "  <input name=\"sharing\" type=\"checkbox\" title=\"Allow users to share items\" data-help=\"Check to provide an ability for the users to share the items with their friends via social networks\" />\n" +
    "  <input name=\"flags\" type=\"checkbox\" checked=\"checked\" title=\"Allow community flagging\" data-help=\"Check to add a button for the users to mark inappropriate content\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Ad/analytics -->\n" +
    "<fieldset name=\"integration\">\n" +
    "  <legend class=\"icon-certificate\">Ad / Analytics Integration</legend>\n" +
    "\n" +
    "  <input name=\"nativeinterval\" type=\"text\" data-storage=\"number\" title=\"Native Ad Interval\" data-help=\"Interval between native ad placeholders, or leave blank to disable. Subscribe to Echo.StreamServer.Controls.Stream.Item.onNativeAdRender to fill each placeholder.\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Upload -->\n" +
    "<fieldset name=\"upload\">\n" +
    "  <legend class=\"icon-upload\">Upload Options</legend>\n" +
    "\n" +
    "  <input name=\"enabled\" type=\"checkbox\" title=\"Enable Upload\" data-help=\"If checked, an upload Submit form will be displayed\" />\n" +
    "\n" +
    "  <input name=\"fpkey\" type=\"text\" title=\"FilePicker API Key\" data-help=\"If supplied, this will enable FilePicker in the upload form\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Authorization -->\n" +
    "<fieldset name=\"auth\">\n" +
    "  <legend class=\"icon-user\">Authorization</legend>\n" +
    "\n" +
    "  <input name=\"enabled\" type=\"checkbox\" checked=\"checked\" title=\"Enable user authorization\" data-help=\"Check to enable authorization\" />\n" +
    "\n" +
    "  <select name=\"janrainApp\" title=\"Janrain app\" data-help=\"Specifies the Janrain application\">\n" +
    "</fieldset>\n" +
    "");
}]);

angular.module("/heatmap/dashboard", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/heatmap/dashboard",
    "<!-- NOTES:\n" +
    "\n" +
    "1. You must make your app.config{} block defaults match these defaults _exactly_\n" +
    "   or you will get unexpected behaviors when your app loads. If the user leaves\n" +
    "   a field set to its default value, the field is _removed_ from the config\n" +
    "   block. So if the default is true, it will not be sent at all if the checkbox\n" +
    "   is checked. That means if you go to use it in app.js it can evaluate to false\n" +
    "   unexpectedly. See the related comment there for details.\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "<select name=\"appkey\" required=\"required\" data-component=\"AppKeyList\" title=\"Application key\" data-help=\"Specifies the application key for this instance\" />\n" +
    "\n" +
    "<!-- TODO: This is just a streamlined fieldset from the one in Media Gallery.\n" +
    "     How can we reuse? -->\n" +
    "<fieldset name=\"datasource\">\n" +
    "  <legend class=\"icon-filter\">Data Source</legend>\n" +
    "\n" +
    "  <select name=\"targetURLSource\" title=\"Source of Target URL\" data-help=\"Select how the target URL is determined\">\n" +
    "    <option value=\"canonical\" selected=\"selected\">Canonical URL of Host Page</option>\n" +
    "    <option value=\"actualurl\">Actual URL of Host Page</option>\n" +
    "    <option value=\"echourl\">META echo:url Value</option>\n" +
    "    <option value=\"specific\">Specify a URL</option>\n" +
    "    <!--<option value=\"builder\">Data Source Builder</option>-->\n" +
    "  </select>\n" +
    "\n" +
    "  <!-- Only one of these options will be shown at a time -->\n" +
    "  <input name=\"specifiedURL\" type=\"text\" title=\"Specified URL\" data-help=\"Please specify the exact URL you wish to use.\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<fieldset name=\"display\">\n" +
    "  <legend class=\"icon-picture\">Display</legend>\n" +
    "\n" +
    "  <!-- TODO: We really need full HTML templates so we can render clickable\n" +
    "       images and put a border around the active one instead of always using\n" +
    "       pull-downs. -->\n" +
    "  <select name=\"visualization\" title=\"Visualization\" data-help=\"What should the map look like?\">\n" +
    "    <option value=\"world\" selected=\"selected\">World</option>\n" +
    "    <option value=\"usalbiers\">USA (Albiers)</option>\n" +
    "    <option value=\"usflat\">USA (Flat)</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <input name=\"heading\" type=\"text\" title=\"Heading\" data-help=\"If specified, will be displayed as a heading at the top of the map.\" />\n" +
    "\n" +
    "  <input name=\"showSpeed\" type=\"text\" value=\"500\" title=\"Ping Show Speed (ms)\" data-help=\"How quickly pings will animate in.\" />\n" +
    "  <input name=\"fadeSpeed\" type=\"text\" value=\"5000\" title=\"Ping Fade Speed (ms)\" data-help=\"How quickly pings will animate out.\" />\n" +
    "  <input name=\"pingInterval\" type=\"text\" value=\"12000\" title=\"Ping Interval (ms)\" data-help=\"How often pings will be displayed. They are drawn randomly from 1ms to this value, which compensates for data feed polling rates and slow moving feeds.\" />\n" +
    "\n" +
    "  <input name=\"showStream\" type=\"checkbox\" title=\"Show Stream\" data-help=\"The input stream is normally hidden, but may be displayed below the map by checking this box. Use plugins through Echo.Loader.Overrides to style it.\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Authorization -->\n" +
    "<fieldset name=\"auth\">\n" +
    "  <legend class=\"icon-user\">Authorization</legend>\n" +
    "\n" +
    "  <input name=\"enabled\" type=\"checkbox\" checked=\"checked\" title=\"Enable user authorization\" data-help=\"Check to enable authorization\" />\n" +
    "\n" +
    "  <select name=\"janrainApp\" title=\"Janrain app\" data-help=\"Specifies the Janrain application\">\n" +
    "</fieldset>\n" +
    "");
}]);

angular.module("/poll/dashboard", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/poll/dashboard",
    "<!-- NOTES:\n" +
    "\n" +
    "1. You must make your app.config{} block defaults match these defaults _exactly_\n" +
    "   or you will get unexpected behaviors when your app loads. If the user leaves\n" +
    "   a field set to its default value, the field is _removed_ from the config\n" +
    "   block. So if the default is true, it will not be sent at all if the checkbox\n" +
    "   is checked. That means if you go to use it in app.js it can evaluate to false\n" +
    "   unexpectedly. See the related comment there for details.\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "<fieldset name=\"datasource\">\n" +
    "  <legend class=\"icon-filter\">Data Source</legend>\n" +
    "\n" +
    "  <select name=\"appkey\" required=\"required\" data-component=\"AppKeyList\" title=\"Application key\" data-help=\"Specifies the application key for this instance.\" />\n" +
    "\n" +
    "  <select name=\"domain\" required=\"required\" data-component=\"DomainList\" title=\"Domain / Property\" data-help=\"Specifies the domain this poll will live on. You must have moderator privileges on this domain.\" />\n" +
    "\n" +
    "  <select name=\"targetURLSource\" title=\"Source of Target URL\" data-help=\"Select how the target URL is determined\">\n" +
    "    <option value=\"autogen\" selected=\"selected\">Auto-generate</option>\n" +
    "    <option value=\"canonical\">Canonical URL of Host Page</option>\n" +
    "    <option value=\"actualurl\">Actual URL of Host Page</option>\n" +
    "    <option value=\"echourl\">META echo:url Value</option>\n" +
    "    <option value=\"specific\">Specify a URL</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <!-- Only one of these options will be shown at a time -->\n" +
    "  <input name=\"specifiedURL\" type=\"text\" title=\"Specified URL\" data-help=\"Please specify the exact URL you wish to use.\" />\n" +
    "\n" +
    "  <input name=\"busName\" type=\"text\" data-component=\"HiddenValue\" title=\"Bus Name\" />\n" +
    "  <input name=\"instanceName\" type=\"text\" data-component=\"HiddenValue\" title=\"Instance Name\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<fieldset name=\"pollbuilder\">\n" +
    "  <legend class=\"icon-th-list\">Poll Builder</legend>\n" +
    "\n" +
    "  <input name=\"manual\" type=\"checkbox\" title=\"Submit Manually\" data-help=\"If checked, poll builder options will be ignored.\" />\n" +
    "\n" +
    "  <fieldset name=\"heading\">\n" +
    "    <legend class=\"icon-picture\">Header</legend>\n" +
    "    <input name=\"title\" type=\"text\" title=\"Title\" data-help=\"Enter the question you would like to ask.\" />\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the optional heading image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"question\" type=\"text\" title=\"Question\" data-help=\"Enter the question you would like to ask.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option1\">\n" +
    "    <legend class=\"icon-check\">Option 1</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option2\">\n" +
    "    <legend class=\"icon-check\">Option 2</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option3\">\n" +
    "    <legend class=\"icon-check\">Option 3</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option4\">\n" +
    "    <legend class=\"icon-check\">Option 4</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option5\">\n" +
    "    <legend class=\"icon-check\">Option 5</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option6\">\n" +
    "    <legend class=\"icon-check\">Option 6</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option7\">\n" +
    "    <legend class=\"icon-check\">Option 7</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option8\">\n" +
    "    <legend class=\"icon-check\">Option 8</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "    <input name=\"color\" type=\"text\" data-component=\"ColorPicker\" title=\"Color\" data-help=\"The primary color for this option, for visualizations that use colors.\" />\n" +
    "  </fieldset>\n" +
    "</fieldset>\n" +
    "\n" +
    "<fieldset name=\"display\">\n" +
    "  <legend class=\"icon-picture\">Display</legend>\n" +
    "\n" +
    "  <textarea name=\"header\" title=\"Header HTML\" data-help=\"Optional HTML to include above the poll itself. Note that this option is DEPRECATED in favor of including this in the poll itself.\"></textarea>\n" +
    "  <textarea name=\"footer\" title=\"Footer HTML\" data-help=\"Optional HTML to include below the poll itself. Note that this option is DEPRECATED in favor of including this in the poll itself.\"></textarea>\n" +
    "\n" +
    "  <!-- TODO: We really need full HTML templates so we can render clickable\n" +
    "       images and put a border around the active one instead of always using\n" +
    "       pull-downs. -->\n" +
    "  <select name=\"visualization\" title=\"Visualization\" data-help=\"What should the poll look like?\">\n" +
    "    <option value=\"list\" selected=\"selected\">Vertical List</option>\n" +
    "    <option value=\"textbuttons\">Text Buttons</option>\n" +
    "    <option value=\"updown\">Up/Down Buttons</option>\n" +
    "    <option value=\"sidebyside\">Side by Side Options</option>\n" +
    "    <option value=\"tugofwar\">Tug Of War (Nested)</option>\n" +
    "    <option value=\"reaction\">Reaction Boxes</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <select name=\"showResults\" title=\"Show Results\" data-help=\"When should results be shown? Note that some visualizations like Tug of War look best if pre-loaded.\">\n" +
    "    <option value=\"after\" selected=\"selected\">After Selection</option>\n" +
    "    <option value=\"before\">Before Selection (on page load)</option>\n" +
    "    <option value=\"never\">Never (Hide Results)</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <input name=\"percent\" type=\"checkbox\" checked=\"checked\" title=\"Show Percentage\" data-help=\"If checked, a percentage value will be displayed in the result elements.\" />\n" +
    "  <input name=\"count\" type=\"checkbox\" title=\"Show Vote Count\" data-help=\"If checked, the vote count will be displayed in the result elements.\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Authorization -->\n" +
    "<fieldset name=\"auth\">\n" +
    "  <legend class=\"icon-user\">Authorization</legend>\n" +
    "\n" +
    "  <input name=\"enabled\" type=\"checkbox\" checked=\"checked\" title=\"Enable user authorization\" data-help=\"Check to enable authorization\" />\n" +
    "\n" +
    "  <select name=\"janrainApp\" title=\"Janrain app\" data-help=\"Specifies the Janrain application\">\n" +
    "</fieldset>\n" +
    "");
}]);

angular.module("/poll_cse/dashboard", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/poll_cse/dashboard",
    "<!-- NOTES:\n" +
    "\n" +
    "1. You must make your app.config{} block defaults match these defaults _exactly_\n" +
    "   or you will get unexpected behaviors when your app loads. If the user leaves\n" +
    "   a field set to its default value, the field is _removed_ from the config\n" +
    "   block. So if the default is true, it will not be sent at all if the checkbox\n" +
    "   is checked. That means if you go to use it in app.js it can evaluate to false\n" +
    "   unexpectedly. See the related comment there for details.\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "<fieldset name=\"datasource\">\n" +
    "  <legend class=\"icon-filter\">Data Source</legend>\n" +
    "\n" +
    "  <select name=\"appkey\" required=\"required\" data-component=\"AppKeyList\" title=\"Application key\" data-help=\"Specifies the application key for this instance.\" />\n" +
    "\n" +
    "  <select name=\"domain\" required=\"required\" data-component=\"DomainList\" title=\"Domain / Property\" data-help=\"Specifies the domain this poll will live on. You must have moderator privileges on this domain.\" />\n" +
    "\n" +
    "  <select name=\"targetURLSource\" title=\"Source of Target URL\" data-help=\"Select how the target URL is determined\">\n" +
    "    <option value=\"autogen\" selected=\"selected\">Auto-generate</option>\n" +
    "    <option value=\"canonical\">Canonical URL of Host Page</option>\n" +
    "    <option value=\"actualurl\">Actual URL of Host Page</option>\n" +
    "    <option value=\"echourl\">META echo:url Value</option>\n" +
    "    <option value=\"specific\">Specify a URL</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <!-- Only one of these options will be shown at a time -->\n" +
    "  <input name=\"specifiedURL\" type=\"text\" title=\"Specified URL\" data-help=\"Please specify the exact URL you wish to use.\" />\n" +
    "\n" +
    "  <input name=\"busName\" type=\"text\" data-component=\"HiddenValue\" title=\"Bus Name\" />\n" +
    "  <input name=\"instanceName\" type=\"text\" data-component=\"HiddenValue\" title=\"Instance Name\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<fieldset name=\"pollbuilder\">\n" +
    "  <legend class=\"icon-th-list\">Poll Builder</legend>\n" +
    "\n" +
    "  <fieldset name=\"heading\">\n" +
    "    <legend class=\"icon-picture\">Header</legend>\n" +
    "    <input name=\"title\" type=\"text\" title=\"Title\" data-help=\"Enter the question you would like to ask.\" />\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the optional heading image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"question\" type=\"text\" title=\"Question\" data-help=\"Enter the question you would like to ask.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option1\">\n" +
    "    <legend class=\"icon-check\">Option 1</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option2\">\n" +
    "    <legend class=\"icon-check\">Option 2</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option3\">\n" +
    "    <legend class=\"icon-check\">Option 3</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option4\">\n" +
    "    <legend class=\"icon-check\">Option 4</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option5\">\n" +
    "    <legend class=\"icon-check\">Option 5</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option6\">\n" +
    "    <legend class=\"icon-check\">Option 6</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option7\">\n" +
    "    <legend class=\"icon-check\">Option 7</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "\n" +
    "  <fieldset name=\"option8\">\n" +
    "    <legend class=\"icon-check\">Option 8</legend>\n" +
    "    <select name=\"image\" data-component=\"FilePicker\" title=\"Image\" data-help=\"Click to set the inset or thumbnail image for the item. Display is visualization dependent.\" />\n" +
    "    <input name=\"answer\" type=\"text\" title=\"Answer\" data-help=\"The answer text for this option.\" />\n" +
    "  </fieldset>\n" +
    "</fieldset>\n" +
    "\n" +
    "<fieldset name=\"display\">\n" +
    "  <legend class=\"icon-picture\">Display</legend>\n" +
    "\n" +
    "  <textarea name=\"header\" title=\"Header HTML\" data-help=\"Optional HTML to include above the poll itself. Note that this option is DEPRECATED in favor of including this in the poll itself.\"></textarea>\n" +
    "  <textarea name=\"footer\" title=\"Footer HTML\" data-help=\"Optional HTML to include below the poll itself. Note that this option is DEPRECATED in favor of including this in the poll itself.\"></textarea>\n" +
    "\n" +
    "  <!-- TODO: We really need full HTML templates so we can render clickable\n" +
    "       images and put a border around the active one instead of always using\n" +
    "       pull-downs. -->\n" +
    "  <select name=\"visualization\" title=\"Visualization\" data-help=\"What should the poll look like?\">\n" +
    "    <option value=\"list\" selected=\"selected\">Vertical List</option>\n" +
    "    <option value=\"textbuttons\">Text Buttons</option>\n" +
    "    <option value=\"updown\">Up/Down Buttons</option>\n" +
    "    <option value=\"sidebyside\">Side by Side Options</option>\n" +
    "    <option value=\"tugofwar\">Tug Of War (Nested)</option>\n" +
    "    <option value=\"reaction\">Reaction Boxes</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <select name=\"showResults\" title=\"Show Results\" data-help=\"When should results be shown? Note that some visualizations like Tug of War look best if pre-loaded.\">\n" +
    "    <option value=\"after\" selected=\"selected\">After Selection</option>\n" +
    "    <option value=\"before\">Before Selection (on page load)</option>\n" +
    "    <option value=\"never\">Never (Hide Results)</option>\n" +
    "  </select>\n" +
    "\n" +
    "  <input name=\"percent\" type=\"checkbox\" checked=\"checked\" title=\"Show Percentage\" data-help=\"If checked, a percentage value will be displayed in the result elements.\" />\n" +
    "  <input name=\"count\" type=\"checkbox\" title=\"Show Vote Count\" data-help=\"If checked, the vote count will be displayed in the result elements.\" />\n" +
    "</fieldset>\n" +
    "\n" +
    "<!-- Authorization -->\n" +
    "<fieldset name=\"auth\">\n" +
    "  <legend class=\"icon-user\">Authorization</legend>\n" +
    "\n" +
    "  <input name=\"enabled\" type=\"checkbox\" checked=\"checked\" title=\"Enable user authorization\" data-help=\"Check to enable authorization\" />\n" +
    "\n" +
    "  <select name=\"janrainApp\" title=\"Janrain app\" data-help=\"Specifies the Janrain application\">\n" +
    "</fieldset>\n" +
    "");
}]);
