Ext.define('MonkTouch.view.Section', {
    extend: 'Ext.Container',
    xtype: 'section',   
    config: {
      styleHtmlContent: true,
      scrollable:true
    },
    constructor : function(config) {
   		Ext.apply(config, {
        items:[
          {
            xtype:'titlebar',
            docked:'top',
            title:config.title
          }
        ]   
   		});

      var store = Ext.getStore(config.storeName),
         me = this;

         store.getProxy().setExtraParams(config.filters);

         me.on({
          activate:function(){
          Ext.Viewport.setMasked({xtype:'loadmask'});
           store.load({
            callback:function(){
              var output = store.first();
              me.setHtml(output.data.text);
              Ext.Viewport.setMasked(false);
            },
            scope:this
           });
          }
        });
         // Ext.util.JSONP.request({
         //      callbackKey:"callback",
         //      params:{
         //        id:filterid
         //      },
         //      url:MonkTouch.setup.getBasePath()+'/modules/section.php',
         //      success:function(data){
                
         //      }
         // });
      this.callParent([config]);
    }
}); 