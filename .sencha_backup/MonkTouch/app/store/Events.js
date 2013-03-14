Ext.define('MonkTouch.store.Events',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Events',
      clearOnPageLoad:false,
      pageSize:20,
      proxy:{
        type:'jsonpcache', 
        cacheTimeout:600,
        cacheKey:'eventData',
        callbackKey:'callback',
        noCache:false,
        extraParams:{
        },
			  url:MonkTouch.setup.getBasePath()+'/modules/events.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
