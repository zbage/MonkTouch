Ext.define('MonkTouch.store.Articles',{
    extend: 'Ext.data.Store',
    //requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Articles',
      proxy:{
			  type:'ajax', //was ajax using plugin ajaxcache
        //cacheTimeout:180,
			  url: MonkTouch.setup.getBasePath()+'/modules/articles.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
