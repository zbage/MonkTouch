Ext.define('MonkTouch.store.Section',{
    extend: 'Ext.data.Store',
    //requires: 'Ext.ux.proxy.AjaxCache',
    config:{
      model: 'MonkTouch.model.Section',
      proxy:{
        type:'ajax', //was ajax using plugin ajaxcache
        //cacheTimeout:180,
  		  url:MonkTouch.setup.getBasePath()+'/modules/sections.php',
  			reader:{
  				type:'json',
  				rootProperty:'item'
  			}
  		},
	    remoteFilter:true,
	    autoLoad:false
    }
});
