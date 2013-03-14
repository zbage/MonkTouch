Ext.define('MonkTouch.store.Section',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Section',
      proxy:{
        type:'jsonpcache', //was ajax using plugin ajaxcache
        cacheTimeout:600,
        cacheKey:'sectionData',
        callbackKey:'callback',
        noCache:false,
        extraParams:{
        },
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
