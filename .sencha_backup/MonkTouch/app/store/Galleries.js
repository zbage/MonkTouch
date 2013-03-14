Ext.define('MonkTouch.store.Galleries',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Galleries',
      clearOnPageLoad:false,
      pageSize:50,
      proxy:{
        type:'jsonpcache', 
        cacheTimeout:600,
        cacheKey:'galleryData',
        callbackKey:'callback',
        noCache:false,
        extraParams:{
        },
		    url:MonkTouch.setup.getBasePath()+'/modules/galleries.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
