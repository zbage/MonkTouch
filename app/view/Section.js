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
      
      var filterid = MonkTouch.FilterUtil.getFilters(config.filters)[0].value,
          me = this;        
         Ext.Ajax.request({
              url:MonkTouch.setup.getBasePath()+'/modules/sections.php?id='+filterid,
              success:function(data){
                //console.log(data);
                me.setHtml(data.responseText);
              }
         });
      this.callParent([config]);
    }
}); 