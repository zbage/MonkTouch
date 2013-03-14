Ext.define('MonkTouch.view.GalleryView',{
    extend : 'Ext.navigation.View',
    xtype  : 'galleryview',
    requires:[ 'MonkTouch.view.GalleryList' ],
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
                storeName: config.storeName
              }
          ]
        });
        this.callParent([config]);
      }
});
