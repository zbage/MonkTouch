Ext.define('MonkTouch.store.Events',{
    extend: 'Ext.data.Store',
    //requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Events',
      proxy:{
        type:'ajax', //was ajax using plugin ajaxcache
        //cacheTimeout:180,
			  url:MonkTouch.setup.getBasePath()+'/modules/events.php',
			  reader:{
				  type:'json',
				  rootProperty:'items'
			  }
		  },
	    remoteFilter:true
    }
});
