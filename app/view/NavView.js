Ext.define('MonkTouch.view.NavView',{
    extend : 'Ext.navigation.View',
    xtype  : 'navview',
    requires:[
      'MonkTouch.view.List',
      'Ext.Panel'
    ],
    config:{
      flex:1
    },
    constructor:function(config){
       Ext.apply(config, {
          items:[
              {
                xtype:config.firstView,
                title:config.title,
                itemTpl : MonkTouch.templates.getTpl(config.contentTpl.list),
                storeName: config.storeName,
                detailTpl : MonkTouch.templates.getTpl(config.contentTpl.detail),
                filters: config.filters
              }
          ]
        });
        this.callParent([config]);
      }
    
});
