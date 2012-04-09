Ext.define('MonkTouch.setup',{
    singleton: true, //don't worry about this.
    activeTab:0, //initial tab for application to show
    basePath:'',
    tabs:[
      
        {
            title   : 'Media',
            view   : 'navview',
            iconCls : 'headphones',
            storeName   : 'sermons',
            filters : {
    		      howmany:15,
    		      //hide_series:'job-an-audience-with-god'
            },
            contentTpl:{
              list: 'imageList',
              detail: 'sermonDetail'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        {
            title   : 'Media2',
            view   : 'navview',
            iconCls : 'headphones',
            storeName   : 'Sermons',
            filters : {
    		      howmany:20,
    		      hide_series:'job-an-audience-with-god'
            },
            contentTpl:{
              list: 'imageList',
              detail: 'sermonDetail'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        
        {
            title   : 'Articles',
            iconCls : 'list',
            view   : 'navview',
            storeName   : 'articles',
            filters : {
				      howmany:20,
				      //series:'job-an-audience-with-god'
            },
            contentTpl:{
              list: 'articleList',
              detail: 'articleDetail'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        {
            title   : 'Blogs',
            iconCls : 'doc_list',
            view   : 'navview',
            storeName   : 'Blogs',
            filters : {
              blogname:'blog-layout-1'
				      //howmany:10,
				      //series:'job-an-audience-with-god'
            },
            contentTpl:{
              list: 'defaultList',
              detail: 'articleDetail'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        {
            title   : 'Events',
            iconCls : 'calendar',
            view   : 'navview',
            storeName   : 'Events',
            filters : {
				      //howmany:10,
				      //series:'job-an-audience-with-god'
            },
            contentTpl:{
              list: 'eventList',
              detail: 'eventDetail'
            },
            xtype:'panel',
            layout:'fit'
        },
        {
            title   : 'Directions',
            iconCls : 'doc2',
            view   : 'section',
            storeName   : 'Section',
            filters : {
				      id:'mobile-directions'
            },
            contentTpl:{
              detail: 'defaultDetail'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        {
            title   : 'Contact',
            iconCls : 'doc2',
            view   : 'section',
            storeName   : 'Section',
            filters : {
				      id:'mobile-contact'
            },
            contentTpl:{
              detail: 'defaultDetail'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        
        {
            title   : 'Photos',
            iconCls : 'photo3',
            view   : 'galleryview',
            storeName   : 'Galleries',
            filters : {
            },
            contentTpl:{
              list: 'galleryList'
            },
            xtype:'panel',
            layout:'fit'
            
        },
        {
            title   : 'Home',
            iconCls : 'home',
            view   : 'link',
            filters : {
              href:'http://www.monkdev.com'
            }
        } 
    ],
    setActiveTab:function(idx){
        this.activeTab = idx;
    },
    getBasePath:function(){
        return this.basePath;
    }
});


Ext.define('MonkTouch.templates',{
    //creates instance upon load
    singleton: true,  
    items:{
        defaultList     : "{title}",
        defaultDetail   : "<h2>{title}</h2> {text}",
        articleDetail   : '<h2>{title}</h2><h4>{date} <tpl if="author"><span>by {author}</span></tpl></h4> {text}',
        eventDetail     : "<h2>{title}</h2><h5>{times}</h5> {text}",
        mediaDetail     : "<h2>{title}</h2><h4>{date}</h4><audio src='{audio}' controls /><a href='{audio}' id='droidplay' style='display:none;'>PLAY</a><p>{text}</p>",
        sermonDetail    : '<h2>{title}</h2><h4>{date} <tpl if="author"><span>by {author}</span></tpl></h4><p class="passage">{passage}</p><p><tpl if="audio"><a data-audio="{audio}" title="{title}" class="mediaplay audio">Listen</a></tpl><tpl if="video"><a data-video="{video}" <tpl if="image">data-image="{image}"</tpl> title="{title}" class="mediaplay video">Watch</a></tpl></p><p>{text}</p>',
        embedVideoDetail: '<h2>{title}</h2><h4>{date}</h4><tpl if="embedsrc"><div class="vidembed" style="width:100%;"><iframe frameborder="0" src="{embedsrc}" width="290" height="163" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></tpl>{text}',
        articleList     : "<strong>{title}</strong><p class='subline'>{date}</p>",
        eventList       : '<div class="date"><span class="month">{month}</span><span class="day">{day}</span></div> {title}<tpl if="locname" <p class="subline">@ {locname}</p></tpl>',
        imageList       : '<div class="avatar" <tpl if="thmb"> style="background-image: url({thmb}); width:50px; height:50px; overflow:hidden; display:block; float:left; margin-right:10px;"</tpl>></div><span class="name">{title}</span>',
        galleryList     : '<div class="avatar" <tpl if="thmb"> style="background-image: url({thmb}); width:50px; height:50px; overflow:hidden; display:block; float:left; margin-right:10px;"</tpl>></div><span class="name">{title}<p class="subline"><span class="imgnumber">{number}</span> images</p></span>'
    },
    getTpl:function(name){
      return this.items[name];
    }
});

 

