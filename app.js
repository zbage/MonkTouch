String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'MonkTouch',
    appFolder: 'app',
    
    icon:{
      57: 'resources/icons/icon.png',
      72: 'resources/icons/icon~ipad.png',
      114: 'resources/icons/icon@2x.png',
      144: 'resources/icons/icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',
    
    requires:[
  	'MonkTouch.setup',
  	'MonkTouch.FilterUtil'
    ],
    
    controllers:[
      'NavView',
	    'Viewport'
    ],
    models:[
      'Sermons',
      'Articles',
      'Blogs',
      'Events',
      'Galleries',
      'Photos'
    ],
    stores:[
      'Sermons',
      'Articles',
      'Blogs',
      'Events',
      'Galleries',
      'Photos'
    ],
    views:[
      'Viewport'
    ],
    launch:function(){
      Ext.fly('appLoadingIndicator').destroy();
      Ext.create('MonkTouch.view.Viewport');
    }
});

