MonkMobile.templates = {
	defaultList:"{title}",
	defaultDetail:"<h2>{title}</h2> {text}",
	eventDetail:"<h2>{title}</h2><h5>{times}</h5> {text}",
	mediaDetail: "<h2>{title}</h2><h4>{date}</h4><audio src='{audio}' controls /><p>{text}</p>",
	embedVideoDetail: '<h2>{title}</h2><h4>{date}</h4><tpl if="embedsrc"><div class="videmed" style="width:300;"><iframe frameborder="0" src="{embedsrc}" width="300"></iframe></div></tpl>{text}',
	mediaList: "{title}",
	articleList: "{title}",
	eventList: '<div class="date"><span class="month">{month}</span><span class="day">{day}</span></div> {title}<tpl if="locname" <p class="subline">@ {locname}</p></tpl>',
	imageList:'<div class="avatar"<tpl if="thmb"> style="background-image: url({thmb}); width:50px; height:50px; overflow:hidden; display:block; float:left; margin-right:10px;"</tpl>></div><span class="name">{title}</span>',
	galleryList:'<div class="avatar"<tpl if="thmb"> style="background-image: url({thmb}); width:50px; height:50px; overflow:hidden; display:block; float:left; margin-right:10px;"</tpl>></div><span class="name">{title}<p class="subline"><span class="imgnumber">{number}</span> images</p></span>' 
}
MonkMobile.feature = {
	tpl: '<div class="latest"><div class="media-wrap"><div  id="playmedia" data-url="{audio}" class="listen"><img src="/mobile/public/resources/images/play_btn.png"/></div><img src="{image}" class="latest-image" width="320" height="150" /></div><h6>Latest Message <time>{date}</time></h6><h3>{title}</h3><p class="preview">{preview}</p></div><div id="moretabinfo">SWIPE TABBAR TO SEEM MORE</div>'
}
MonkMobile.setup = {
	tabs :[ 
		{
            iconCls:       'doc2',
            text:          'Posts',
            controller:    'Blogs',
			viewtpl:{
				list:      MonkMobile.templates.defaultList,
				detail:    MonkMobile.templates.defaultDetail
			}
        },
        {
            iconCls:       'headphones',
            text:          'Media',
            controller:    'Media',
			viewtpl:{
				list:      MonkMobile.templates.imageList,
				detail:    MonkMobile.templates.mediaDetail
			}
        },
        {
            iconCls:      'compass1',
            text:         'Section',
            controller:   'Section',
			viewtpl:{
				find:     'mobile-directions'
			}
        },
		{
            iconCls:      'doc2',
            text:         'Articles',
            controller:   'Articles',
			viewtpl:{
				list:     MonkMobile.templates.defaultList,
				detail:   MonkMobile.templates.defaultDetail
        	}
		},
		{
			iconCls:      'calendar',
		    text:         'Events',
		    controller:   'Events',
			viewtpl:{
				list:     MonkMobile.templates.eventList,
				detail:   MonkMobile.templates.eventDetail
			}
		},
		{
			iconCls:      'photo3',
		    text:         'Gallery',
		    controller:   'Galleries',
			viewtpl:{
				list:     MonkMobile.templates.galleryList
			}
		},
		{
            iconCls:      'home',
            text:         'home',
            controller:   'Link',
			viewtpl:{
				url:      '/' //can be full url
			}
        }
	]
}

