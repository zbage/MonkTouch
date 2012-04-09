Ext.define('MonkTouch.store.Photos',{
    extend: 'Ext.data.Store',
    //requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Photos',
      proxy:{
        type:'ajax', //was ajax using plugin ajaxcache
        //cacheTimeout:180,
			  url:MonkTouch.setup.getBasePath()+'/modules/photos.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
