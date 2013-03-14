Ext.define('MonkTouch.store.Photos',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Photos',
      proxy:{
        type:'jsonpcache', 
        cacheTimeout:600,
        cacheKey:'photoData',
        callbackKey:'callback',
        noCache:false,
        extraParams:{
        },
			  url:MonkTouch.setup.getBasePath()+'/modules/photos.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
