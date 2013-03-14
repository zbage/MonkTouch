Ext.define('MonkTouch.controller.NavView',{
  extend: 'Ext.app.Controller',
  requires:[
    'MonkTouch.view.Detail',
    'MonkTouch.view.PhotoGrid',
    'MonkTouch.view.AudioPlayer',
    'Ext.Video',
    'Ext.carousel.Carousel',
    'Ext.plugin.ListPaging'
  ],
  config: {
    refs:{
      tabpanel:'tabpanel',
      listpaging:'listpaging'
    },
    control: {
      list:{
        itemtap: 'onItemTap'
      },
      photogrid:{
        itemtap:'onPhotoTap'
      },
      itemdetail:{
        tap:'onMediaPlay'
      }
    }
  },
  onItemTap:function(list, index, node, record){ 
    if(list.config.storeName === "Galleries"){
      var main = this.getTabpanel().getActiveItem().down('galleryview');
      var slug = record.data.slug;
      main.push({
          xtype:'photogrid',
          autoDestroy:true,
          cls:'photogrid-panel',
          storeName:'Photos',
          filters:{
            galleryid:record.data.slug
          },
          title: list.config.title//record.data.title
      });
    }else{
      var main = this.getTabpanel().getActiveItem().down('navview');
      main.push({
          xtype:'itemdetail',
          data:record.data,
          tpl:list.config.detailTpl,
          title: list.config.title//record.data.title
      });
    }
  },
  onMediaPlay:function(e){
    e.preventDefault();
    e.stopPropagation();
    var main = this.getTabpanel().getActiveItem().down('navview'),
        btn = e.target,
        title = btn.getAttribute('title'),
        audiourl = btn.getAttribute('data-audio'),
        videourl = btn.getAttribute('data-video');
        posterimg = btn.getAttribute('data-image');

     function hasClass(ele,cls){
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
      }
      if(hasClass(btn,'audio')){
        if(audiourl != ""){
          e.preventDefault();
          e.stopPropagation();
          
          main.push({
            title:title,
            xtype:'audioplayer',
            audio:audiourl
          });
        }
      }
      if(hasClass(btn,'video')){
        if(videourl !=""){
          main.push({
            title:title,
            xtype:'video',
            url:videourl,
            posterUrl:posterimg ? posterimg : MonkTouch.setup.getBasePath() + "/resources/images/default-poster-image.jpg"
          });
        }
      }
  },
  onPhotoTap:function(list, index, node, record){
    var main = this.getTabpanel().getActiveItem().down('galleryview'),
        items = [],
        carousel;
        
    list.getStore().each(function(obj){
		var item = new Ext.Template( 
				'<div class="photo" style="display:block, width:100%,height:inherit, position:relative"><img src="{photo}" style="width:100%"/></div>',
				{compile:true}
			);
      //vbox with panel above and below with flex 1 allows for vertically centered image 
			items.push({
        xtype:'container',//'container',
        layout:{
          type:'vbox',
          align:'middle'
        },
        items:[
          {
            xtype:'panel',
            flex:1
          },
          {
            xtype:'panel',
            width:'100%',
    				html: item.apply(obj.data)
          },
          {
            xtype:'panel',
            flex:1
          }
        ],
				cls:  obj.data.title
			});
    });

    main.push({
      xtype:'carousel',
      activeItem:index,
      autoDestroy:true,
      items:items,
      style:{
        background:'black'
      },
      direction:'horizontal',
      flex:1
          
    });
  }
});