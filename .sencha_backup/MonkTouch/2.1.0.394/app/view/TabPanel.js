Ext.define('MonkTouch.view.TabPanel',{
    extend: 'Ext.tab.Panel',
    xtype:'tabpanel',
    requires:[
        'MonkTouch.setup',
        'MonkTouch.view.NavView',
        'MonkTouch.view.GalleryView',
        'MonkTouch.view.Section',
        'Ext.MessageBox'
    ],
    config: {
        fullscreen:true,
        activeItem:MonkTouch.setup.activeTab,
        tabBarPosition:'bottom',
        layout:{
          animation:{
            //type:'fade' //cover,fade,flip,pop,reveal,scroll,slide
            duration:0 //makes tab panel switch w/out animation
          }
        },
        tabBar:{
            layout:{
                pack:'center',
                align:'center'
            },
            scrollable:{
                direction:'horizontal',
                indecators:false
            }
        },
        items:MonkTouch.setup.tabs //from setup.js required in app.js
    }
});