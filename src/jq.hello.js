// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory($);
  }
}(function ($) {
  // Name plugin
  var pluginName = "hello";

  // Define default options once for all plugin instances
  var defaultOptions = {
    name: "World"
  };

  // Plugin constructor
  var Hello = function ($elem, options) {
    // Prefix variables with $ to indicate it is a jQuery object
    // Keep reference to main object
    this.$element = $elem;

    // Create new object merging defaultOptions and options
    this.settings = $.extend({}, defaultOptions, options);

    // Initialize the plugin
    this._init();
  }

  $.extend(Hello.prototype, {
    // Private methods begin with _
    _init: function () {
      this.sayHello();
    },

    _isEmpty: function () {
      this.$element.is(':empty');
    },

    // Public methods
    render: function (name) {
      this.$element.html('Hello ' + name + "!")
    },

    sayHello: function (name) {
      if (this._isEmpty()) {
        this.$element.remove();
      }

      this.render(name || this.settings.name);
    },
  });

  $.fn[pluginName] = function (methodOrOptions) {
    // store and return the plugins
    var plugins = [];

    this.each(function () {
      var instance = $(this).data("plugin-" + pluginName);
      // Prevent creating the plugin twice
      if (!instance) {
        instance = new Hello($(this), methodOrOptions)
        $(this).data("plugin-" + pluginName, instance);
      }
      plugins.push(instance);
    });

    // convenience to return the 1 plugin or all of the plugins if there is more than one
    return (plugins.length === 1) ? plugins[0] : plugins;
  };

}));