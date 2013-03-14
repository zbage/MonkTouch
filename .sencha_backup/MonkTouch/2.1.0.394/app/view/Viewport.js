Ext.define('MonkTouch.view.Viewport',{
    extend: 'Ext.Container',
    requires:[
      'MonkTouch.view.TabPanel'
    ],
    layout:{
      type:'card',
      animation:{
        type:'slide',
        direction:'down'
      }
    },
    items:[
      {
          type:'tabpanel'
      }
    ],
    initialize:function(){
      var tabpanel = Ext.create('MonkTouch.view.TabPanel');
      //this.add(tabpanel);
    }
});