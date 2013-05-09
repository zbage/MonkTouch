/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'MonkTouch': 'app'
});
//</debug>

  Ext.application({
      name: 'MonkTouch',

      icon:{
        57:   'resources/icons/icon.png',
        72:   'resources/icons/icon~ipad.png',
        114:  'resources/icons/icon@2x.png',
        144:  'resources/icons/icon~ipad@2x.png'
      },

      isIconPrecomposed: true,

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
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
  });


