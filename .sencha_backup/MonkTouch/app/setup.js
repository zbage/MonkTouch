Ext.define('MonkTouch.setup',{
    singleton: true, //don't worry about this.
    activeTab:0, //initial tab for application to show
    basePath:'http://randlett.net/',
    tabs:[

        {
            title   : 'Media',
            view   : 'navview',
            iconCls : 'headphones',
            storeName   : 'sermons',
            filters : {
    		      //hide_series:'job-an-audience-with-god'
              
            },
            contentTpl:{
              list: 'defaultList',
              detail: 'embedVideoDetail'
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
            storeName  : 'Section',
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
            storeName  : 'Section',
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
            storeName  : 'Galleries',
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
        mediaDetail     : "<h2>{title}</h2><h4>{date}</h4><audio src='{audio}' controls /><a href='{audio}' style='display:none;'>PLAY</a><p>{text}</p>",
        sermonDetail    : '<h2>{title}</h2><h4>{date} <tpl if="author"><span>by {author}</span></tpl></h4><p class="passage">{passage}</p><p><tpl if="audio"><a data-audio="{audio}" title="{title}" class="mediaplay audio">Listen</a></tpl><tpl if="video"><a data-video="{video}" <tpl if="image">data-image="{image}"</tpl> title="{title}" class="mediaplay video">Watch</a></tpl></p><p>{text}</p>',
        embedVideoDetail: '<tpl if="video"><video src="{video}" width="100%" poster="{image}"/></tpl><tpl if="embedsrc"><div class="vidembed" style="width:100%;"><iframe class="youtube-player" style="max-width:100%;" type="text/html" wmode="opaque" frameborder="0" src="{embedsrc}" width="100%"  webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></tpl><h2>{title}</h2><h4>{date}</h4>{text}',
        articleList     : "<strong>{title}</strong><p class='subline'>{date}</p>",
        eventList       : '<div class="date"><span class="month">{month}</span><span class="day">{day}</span></div> {title}<tpl if="locname" <p class="subline">@ {locname}</p></tpl>',
        imageList       : '<div class="avatar" <tpl if="thmb"> style="background-image: url({thmb}); width:50px; height:50px; overflow:hidden; display:block; float:left; margin-right:10px;"</tpl>></div><span class="name">{title}</span>',
        galleryList     : '<div class="avatar" <tpl if="thmb"> style="background-image: url({thmb}); width:50px; height:50px; overflow:hidden; display:block; float:left; margin-right:10px;"</tpl>></div><span class="name">{title}<p class="subline"><span class="imgnumber">{number}</span> images</p></span>'
    },
    getTpl:function(name){
      return this.items[name];
    }
});

 

