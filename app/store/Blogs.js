Ext.define('MonkTouch.store.Blogs',{
    extend: 'Ext.data.Store',
    //requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Blogs',
      proxy:{
			  type:'ajax', //was ajax using plugin ajaxcache
        //cacheTimeout:180,
			  url:MonkTouch.setup.getBasePath()+'/modules/blogs.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
