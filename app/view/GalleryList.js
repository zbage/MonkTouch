Ext.define('MonkTouch.view.GalleryList', {
    extend : 'Ext.List',
    xtype  : 'gallerylist',
    config:{
      scrollable:true
    },
    constructor : function(config) {
	
     var store = Ext.getStore(config.storeName),
         me = this;
         //proxy = store.getProxy();
      store.setFilters(MonkTouch.FilterUtil.getFilters(config.filters));
     // proxy.setCacheKey(this.getId());
      me.setMasked();
  		Ext.apply(config, {
  	     store : store        
  		});
      store.load(function(){
        me.unmask();
      });
      this.callParent([config]);
    }
});