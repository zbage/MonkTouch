String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

  Ext.application({
      name: 'MonkTouch',
      appFolder: 'app',

      icon:{
        57:   'resources/icons/icon.png',
        72:   'resources/icons/icon~ipad.png',
        114:  'resources/icons/icon@2x.png',
        144:  'resources/icons/icon~ipad@2x.png'
      },

      startupImage:{
        '320x460':  'resources/loading/320x460.png',
        '640x920':  'resources/loading/640x960.png',
        '640x1136': 'resources/loading/640x1136.png'
      },

      requires:[
       'MonkTouch.setup',
       'MonkTouch.FilterUtil'
      ],

      controllers:[
        'NavView',
        'Viewport',
        'TabPanel'
      ],
      models:[
        'Sermons',
        'Articles',
        'Blogs',
        'Events',
        'Galleries',
        'Photos',
        'Section'
      ],
      stores:[
        'Sermons',
        'Articles',
        'Blogs',
        'Events',
        'Galleries',
        'Photos',
        'Section'
      ],
      views:[
        'Viewport'
      ],
      launch:function(){
        Ext.fly('appLoadingIndicator').destroy();
        Ext.create('MonkTouch.view.Viewport');
      },
      onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
  });


