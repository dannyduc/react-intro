var ShapePropertyMixin = {
  _appearanceDefaults: {
    background: '#0099CC',
    width: 100,
    height: 100,
    'border': '1px solid #999',
    position: 'absolute'
  },

  getDefaultProps: function () {
    return {
      properties: null
    };
  },

  extractStyle: function (includeApperanceDefaults) {
    var p = this.props.properties;

    var defaults = includeApperanceDefaults ? $.extend({}, this._appearanceDefaults) : { position: 'absolute' };
    defaults = $.extend(defaults, p);

    var camelCaseKeyProps = {};
    var self = this;
    $.each(defaults, function(k, v) {
      camelCaseKeyProps[self._toCamelCase(k)] = v;
    });
    return camelCaseKeyProps;
  },

  _toCamelCase: function(s) {
    return s.replace(/(\-[a-z])/g, function(m){
      return m.toUpperCase().replace('-', '');
    });
  }

};