Ext.define("MonkTouch.controller.Section",{
     extend: 'Ext.app.Controller',
     config:{
       refs:{
           tabpanel:'tabpanel'
         }
     },
     init:function(){
       var main = this.getTabpanel().getActiveItem(),
           panel = activeItem.down('panel'),
           store = Ext.getStore(config.storeName),
           proxy = store.getProxy();
           
           store.setFilters(MonkTouch.FilterUtil.getFilters(config.filters));
           proxy.setCacheKey(this.getId());
           
           store.load();
           
     }
 }); 


