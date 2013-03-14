Ext.define('MonkTouch.store.Articles',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Articles',
      clearOnPageLoad:false,
      pageSize:20,
      proxy:{
		    type:'jsonpcache', //was ajax using plugin ajaxcache
	      cacheTimeout:600,
	      cacheKey:'articleData',
	      callbackKey:'callback',
	      noCache:false,
        extraParams:{
        },
		    url: MonkTouch.setup.getBasePath()+'/modules/articles.php',
  		  reader:{
  			  type:'json',
  			  rootProperty:'items'
  		  }
	    },
	    remoteFilter:true
    }
});
