Ext.define('MonkTouch.controller.Viewport',{
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
        config = main.getInitialConfig();
    if(config.view === 'navview'){
      main.setItems([{
    	  xtype:config.view,
        firstView:'listitems',
        contentTpl:config.contentTpl,
        storeName:config.storeName.capitalize(),
        filters:config.filters,
			  title:config.title
      }]); 
    }else if(config.view === 'section'){
     main.add({
       xtype:config.view,
       title:config.title,
       filters:config.filters
     });
    }else if(config.view === 'galleryview'){
      main.setItems([{
    	  xtype:config.view,
        firstView:'listitems',
        contentTpl:config.contentTpl,
        storeName:config.storeName.capitalize(),
        //filters:main.filters,
			  title:config.title
      }]);
    }
		MonkTouch.setup.setActiveTab(main);
  },
  onTabChange:function(a,b,c){
    
	  var main = b,
        config = main.getInitialConfig(),
        prevmain = c;    
    if(config.view === 'navview'){
      //if(main.innerItems.length === 0){
        main.setItems([{
      	  xtype:config.view,
          firstView:'listitems',
          contentTpl:config.contentTpl,
          storeName:config.storeName.capitalize(),
          filters:config.filters,
  			  title:config.title
        }]);
        //} 
    }else if(config.view === 'section'){
      if(main.innerItems.length === 0){ 
       main.add({
         xtype:config.view,
         title:config.title,
         filters:config.filters
       });
      }
    }else if(config.view === 'galleryview'){
      //if(main.innerItems.length === 0){
        main.setItems([{
      	  xtype:config.view,
          firstView:'listitems',
          contentTpl:config.contentTpl,
          storeName:config.storeName.capitalize(),
          //filters:main.filters,
  			  title:config.title
        }]);
        //} 
    }else if(config.view === 'link'){
      Ext.Msg.confirm("Confirmation", "Do you want to leave the site?", function(e){
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