Ext.define('MonkTouch.store.Sermons',{
    extend: 'Ext.data.Store',
    //requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Sermons',
      proxy:{
			  type:'ajax', //was ajax using plugin ajaxcache
        //cacheTimeout:180,
  		  url:MonkTouch.setup.getBasePath()+'/modules/sermons.php',
  			reader:{
  				type:'json',
  				rootProperty:'items'
  			}
  		},
	    remoteFilter:true
    }
});
