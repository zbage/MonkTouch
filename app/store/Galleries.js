Ext.define('MonkTouch.store.Galleries',{
    extend: 'Ext.data.Store',
    requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Galleries',
      proxy:{
        type:'ajaxcache', //was ajax using plugin ajaxcache
        cacheTimeout:180,
        cacheKey:'galleries',
			  url:MonkTouch.setup.getBasePath()+'/modules/galleries.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
