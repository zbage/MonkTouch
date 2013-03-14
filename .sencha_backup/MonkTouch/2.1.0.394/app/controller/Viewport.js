Ext.define('MonkTouch.controller.Viewport',{
  extend: 'Ext.app.Controller',
  requires:[
    'MonkTouch.view.TabPanel',
    'MonkTouch.view.Form'
  ],
  config: {
    ref:{
      tabpanel:'tabpanel'
    },
    routes:{
      'tab/:id' : "routeToTab",
      'form/:id/:title' : "routeToForm"
    }
  },
  routeToTab:function(id){
    var tabPanel = Ext.Viewport.getAt(0); 
    var tabs = tabPanel.getItems();
    var requestedTabTitle = id;

    for(var i = 0; i<tabs.items.length; i++){
      var itemTitle = tabs.items[i].title;
      if(itemTitle === requestedTabTitle){
        tabPanel.setActiveItem(i-1);
      }
    }
  },
  routeToForm:function(id,title){
    var viewport = Ext.Viewport;
    var form = Ext.create('MonkTouch.view.Form',{
        storeName:'Section',
        showAnimation:'slideIn',
        hideAnimatino:'slideOut',
        filters : {
          id:id
        },
        contentTpl:{
          detail: 'defaultDetail'
        },
        title:title
    });
    viewport.add(form);
    form.show();
  }
});