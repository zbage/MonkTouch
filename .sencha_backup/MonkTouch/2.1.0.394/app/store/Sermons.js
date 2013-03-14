Ext.define('MonkTouch.store.Sermons',{
    extend: 'Ext.data.Store',
    requires: ['Ext.ux.proxy.JsonPCache','MonkTouch.setup'],
    config:{
      model: 'MonkTouch.model.Sermons',
      clearOnPageLoad:false,
      pageSize:20,
      proxy:{
        type:'jsonpcache', 
        cacheTimeout:600,
        cacheKey:'sermonData',
        callbackKey:'callback',
        noCache:false,
        extraParams:{
        },
        url:MonkTouch.setup.getBasePath()+'/modules/sermons.php',
        reader:{
          type:'json',
          rootProperty:'items'
        }
      },
      remoteFilter:true
    }
});
