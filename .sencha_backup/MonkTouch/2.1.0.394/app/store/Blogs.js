Ext.define('MonkTouch.store.Blogs',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Blogs',
      clearOnPageLoad:false,
      pageSize:20,
      proxy:{
		  type:'jsonpcache', 
        cacheTimeout:600,
        cacheKey:'blogData',
        callbackKey:'callback',
        noCache:false,
        extraParams:{
        },
			  url:MonkTouch.setup.getBasePath()+'/modules/blogs.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
