Ext.define('MonkTouch.view.PhotoGrid', {
    extend : 'Ext.dataview.DataView',
    xtype  : 'photogrid',
    constructor : function(config) {
     var store = Ext.getStore(config.storeName),
         slug = config.filters.galleryid;
         store.getProxy().setExtraParams(config.filters);
         //store.setFilters(MonkTouch.FilterUtil.getFilters(config.filters));

      Ext.apply(config, {
         store : store,
         cls:'grid',
         itemTpl: '<div class="thumbwrap main-image" data-gallery="'+slug+'"><img src="{thumb}" width="100"/></div>'
      });

      store.load(); //can't auto load or filters won't work

      this.callParent([config]);
    }
});