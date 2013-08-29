Ext.define('MonkTouch.controller.TabPanel',{
  extend: 'Ext.app.Controller',

  requires:[
    'MonkTouch.view.NavView',
    'MonkTouch.view.Section',
    'MonkTouch.view.GalleryView'
  ],

  config: {
    refs:{
      tabpanel:'tabpanel'
    },
    control: {
      tabpanel:{
        activeitemchange:'onTabChange',
        show:'tabPanelShow'
      }
    }
  },

  tabPanelShow:function(tp){

    var main = tp.getActiveItem(),
        config = main.getInitialConfig(),
        tb = Ext.ComponentQuery.query('#ext-tabbar-1')[0];
    if(config.view === 'navview'){
      main.setItems([{
        xtype:config.view, //this is navview
        firstView:'listitems',
        contentTpl:config.contentTpl,
        storeName:config.storeName.capitalize(),
        filters:config.filters,
        title:config.title
      }]);
    }else if(config.view === 'section'){
     main.add({
       xtype:config.view, //this is section
       title:config.title,
       filters:config.filters,
       storeName:config.storeName
     });
    }else if(config.view === 'galleryview'){
      main.setItems([{
        xtype:config.view, //this is galleryview
        firstView:'listitems',
        contentTpl:config.contentTpl,
        storeName:config.storeName.capitalize(),
        //filters:main.filters,
        title:config.title
      }]);
    }

    // Set Active Tab
    MonkTouch.setup.setActiveTab(main);

    //swipe tooltip
    var sptr = localStorage.getItem('swipetrainer'),
        scrl = tp.getTabBar().getScrollable().getScroller();
    if(Ext.os.is.Phone && tp.getTabBar().getItems().length > 5){
      if(sptr != 'off' || sptr === undefined){
        var toolTip = Ext.create('Ext.Panel',{
          padding:'0 5 0 5',
          width:'225px',
          height:'35px',
          id:'trainer',
          showAnimation:'popIn',
          hideAnimation:'slideOut',
          listeners:{
            show:function(el){
              scrl.scrollToEnd();
              scrl.on({
                scrollstart:function(){
                  el.hide();
                  localStorage.setItem("swipetrainer", "off");
                }
              });
            },
            tap:function(el){
              el.hide();
            }
          },
          items:[
            {
              xtype:'button',
              id:'trainer-dismiss',
              text:'x',
              docked:'right',
              style:{
                'font-weight':'bold',
                'font-size':'18px',
                'line-height':'15px'
              }
            },
            {
              xtype:'panel',
              html:'<p>Swipe To See More</p>',
              padding: '0 0 10 0'
            }
          ],
          control:{
            'button[id=trainer-dismiss]':{
              tap:function(){
                  this.hide();
                  localStorage.setItem("swipetrainer", "off");
              }
            }
          }
        }).showBy(tb,'bc-tc');
      }
    }
  },

  onTabChange:function(a,b,c){

    var main = b,
        config = main.getInitialConfig(),
        prevmain = c;
    if(config.view === 'navview'){
      //if navview has list we don't need to load it again
        if(main.getInnerItems().length < 1){
          main.setItems([{
            xtype:config.view,
            firstView:'listitems',
            contentTpl:config.contentTpl,
            storeName:config.storeName.capitalize(),
            filters:config.filters,
            title:config.title,
            record:config.storeName.capitalize()
          }]);
        }
    }else if(config.view === 'section'){
      if(main.getInnerItems().length < 1){
         main.add({
           xtype:config.view,
           title:config.title,
           filters:config.filters,
           storeName:config.storeName
         });
      }
    }else if(config.view === 'galleryview'){
      if(main.getInnerItems().length < 1){
        main.setItems([{
          xtype:config.view,
          firstView:'listitems',
          contentTpl:config.contentTpl,
          storeName:config.storeName.capitalize(),
          //filters:main.filters,
          title:config.title
        }]);
      }
    }else if(config.view === 'link'){
      Ext.Msg.confirm("Leaving the mobile view", "Are you sure?", function(e){
        if(e === 'yes'){
          var url = config.filters.href;
          if(config.title.toLowerCase() === "home" || config.title.toLowerCase() === "site" || url === "/"){
            function setStorage(str,val){
              if (typeof(localStorage) != 'undefined' ) {
                try {
                  localStorage.setItem(str, val); //saves to the database, "key", "value"
                } catch (e) {
                  //window.console.log("localStorage Error");
                  if (e == QUOTA_EXCEEDED_ERR) {
                    //window.console.log("Quota Exceeded");
                  }
                }
              }
            }
            function clearStorage(str){
               if (typeof(localStorage) != 'undefined' ) {
                localStorage.setItem(str,"");
               }
            }
            setStorage("redirectmobile","off");
          }
          window.location = url;
        }
      });
    }
  }
});