#MonkTouch
_version 2.7.5_
MonkTouch is a mobile application developed for websites that use the Ekklesia360 CMS.  <http://www.ekklesia360.com>

## NEW
We have some major updates to this version of MonkTouch

* <b>Sencha Touch</b> - Updated to version 2.2.0
* <b>Proxy Loading</b> - We have updated the stores to use the Ext.ux.proxy.ProxyCache plugin.  It is a dual storage remote caching proxy. It will cache the response from the remote request in HTML5 Local Storage in order to reduce the number of HTTP requests that need to be made.Plugin located here: <https://github.com/microadam/Ext.ux.proxy.ProxyCache>
* <b>List Paging</b> - Lists now have auto page on scroll.
* <b>Tab Linking</b> - You can now link to a tab from internal content.
* <b>Sencha Command</b> - Sencha SDK tools have be updated and renamed to Sencha Command <http://www.sencha.com/forum/showthread.php?260885-Sencha-Cmd-v3.1.1-GA-is-Now-Available>
* More descriptive naming of sass variables in the app.scss file for easier styling.
* Updated tab switching to reduce http requests for content.

## Setup
The __/app/setup.js__ file determines application tabs and Ekklesia360 modules to populate the content pane along with the content layout html. Below will explain the api tags available, as well as, the tab object structure.  In addition, you will be able to set the initial active tab.
###MonkTouch.setup: Class

This is a custom Sencha Touch class denoted by the Ext.define. It is loaded at the initial launch of the application and only once which is declared by the variable singleton:true. All other variables and functions are custom for the setup of the application which will be described below.

```
	Ext.define('MonkTouch.setup',{
	    singleton: true,
	    activeTab:0,
	    basePath:'/mobile',
	    tabs:[

	        {
	            title   : 'Media',
	            view   : 'navview',
	            iconCls : 'audio',
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
	            title   : 'Blogs',
	            iconCls : 'doc',
	            view   : 'navview',
	            storeName   : 'Blogs',
	            filters : {
	              blogname:'blog-layout-1'
	            },
	            contentTpl:{
	              list: 'defaultList',
	              detail: 'defaultDetail'
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
			       howmany:10,
				   series:'job-an-audience-with-god'
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
	            iconCls : 'doc',
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
	            title   : 'Photos',
	            iconCls : 'photo',
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
```

* ### activeTab _(number)_
>'activeTab' determines which tab will display initially upon application launch.


* ### basePath  _(string)_
>'basePath' is a url path to the folder where the application will be severed from. This path

* ### tabs _(array of objects)_
> 'tabs' is an array of objects that determine each tab and the content that is rendered in the template.

```
	{
           title   : 'Media',
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

       }
```
### title _(string)_
Title is the string used in the title bar at the top of the application.

---
### view _(string)_
View instructs the application to use a specific structure for the data.

* __navview__ - This is a navigation view to support list/detail. Initial screen will be a list when clicked it will render the detail screen.  This will be used with Sermons, Blogs, Articles, Events.
* __section__ - This is a view that supports straight html generated from an ekklesia360 section. It is only one screen.
* __galleryview__ - This view is a navigation view but specific to ekklesia360 galleries. First, a list of all galleries from ekklesia360 will be shown. When a gallery is chosen a grid of thumbnails will be shown.  When a thumbnail is selected an image slider will be shown allowing swiping of photos.
* __link__ - This is really not a view but tells the application to use the url from the href variable in the filters object. The user will be prompted with a message _"Do you want to leave the site?"_.

---


### iconCls _(string)_
'iconCls' is a string referencing the icon name which will be used for tabs. More icons can be added via the **/resources/scss/app.scss**. You can learn how to add new icons in the section about icons.  Below are the preloaded icon names to use for the application in the iconCls variable.

> calendar
> doc_list
> doc
> info
> list
> audio
> locate
> photo
> time
> home
> video
> mail
> news

---

### storeName _(string)_
Stores are used to load and keep data from internal or external sources. In our case we are loading data from the cms modules. Below is a list of the stores available.
> Sermons
> Blogs
> Events
> Articles
> Galleries
> Section

_NOTE: If you are using a view of 'link) you won't need the storeName variable._

---

### filters _(object)_
Filters are just that, filter parameters to send to the ekklesia360 modules api. You can view what the filters are used for in the api documentation here <http://developers.monkcms.com>.

 __Filter Name__        | type          | __Modules__
 ---------------------- | ------------- | -------------------------
 howmany        		| This is depreciated due to auto loading of list items        |
 howmanydays	        | number        | Events
 category               | string slug * | Articles, Blogs, Events, Sermons
 series                 | string slug   | Articles, Sermons
 group                  | string slug   | Articles, Blogs, Events, Sermons
 blogname               | string slug   | Blogs
 id                     | string slug   | Section (id is for the find api call for sections)
 order                  | string slug   | Articles, Blogs, Events, Sermons *
 hide_category          | string slug   | Articles, Blogs, Events, Sermons
 hide_series            | string slug   | Articles, Sermons
 preacher               | string slug   | Sermons
 author                 | string slug   | Articles, Blogs
 authors                | array of string slugs delineated by commas | Blogs
 tags                   | array of strings delineated by commas | Articles, Blogs, Sermons
 passage	            | string        | Sermons *
 hide_group             | string slug   | Articles, Blogs, Events, Sermons
 location               | string        | Events
 state                  | string        | Events
 near                   | string        | Events
 radius                 | string        | Events
 href                   | string (url)* | This filter is not for a module but for view link




>__slug__ : format is taking the string lowercasing, removing punctuation and adding dashes in place of spaces. _example: "job-an-audience-with-god"_
>__order__ : view ekklesia360 [Documentation](http://developers.monkcms.com) for each module to find order values available for each module
>__passage__ : view ekklesia360 [Documentation](http://developers.monkcms.com/articles/sermons) for passage possible strings
>__href__ : to go to a specific url when tab is clicked set view to link and this filter as the url to redirect to

---

### contentTpl _(object)_
ContentTpl is to specify the templates that are used for each view of the tab panel. Below describes what template variables are required for each view. The template names are represented in the MonkTouch.templates class in the setup.js file. These are customizable and have defaults ready to use.

__View__   | __Required Template Variables__
-----------| ----------------------
navview    | list, detail
gallerview | list
section    | detail
link       | _none_

	contentTpl:{
	    list: 'imageList',
	    detail: 'sermonDetail'
    }

----
### xtype _(string)_
This should never be changed from 'panel' and is not needed if view:'link' is used.

---
### layout _(string)_
This should never be changed from 'fit' and is not needed if view:'link' is used.





## MonkTouch.templates: Class
These templates are the html with Ekklesia360 api reference to use in the display panels. HTML is allowed and is pre-styled.

### Sermons/Articles

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of sermon/article record                                                   |
| Image                 | {image}       | Image of sermon/article record                                                   |
| Preview               | {preview}     | Preview of sermon/article text (200 characters)                                  |
| Author                | {author}      | Author name of sermon/article                                                    |
| Date                  | {date}        | Date of sermon/article in format (Jan 01 2011)                                   |
| Text                  | {text}        | Full Content Text                                                                |
| Summary               | {summary}     | Content from summary field                                                       |
| Slug                  | {slug}        | Slug format of sermon/article name (sermon-name-slug)                            |
| Audio                 | {audio}       | Audio url of sermon/article                                                      |
| Video                 | {video}       | Video url of sermon/article                                                      |
| Embed                 | {embed}       | Embed code of sermon/article (Vimeo or Youtube) *must use iframe embed code      |
| Embed Src             | {embedsrc}    | Embed iframe src url of sermon/article (Vimeo or Youtube) *must use iframe embed code      |
| Embed Type            | {embedtype}   | Embed type of sermon/article either (vimeo or youtube) *must use iframe embed code      |
| Thumb                 | {thmb}        | Thumbnail image of sermon/article (size 50 x 50)                                 |

### Events

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of event record                                                            |
| Image                 | {image}       | Image of event record                                                            |
| Preview               | {preview}     | Preview of event text (200 characters)                                           |
| Text                  | {text}        | Full text of event content                                                       |
| Coordinator Name      | {coordname}   | Name of event coordinator                                                        |
| Email                 | {email}       | Email of event coordinator                                                       |
| Phone                 | {phone}       | Phone number of event coordinator                                                |
| Start Date            | {startDate}   | Start Date of event in format (Jan 01 2011)                                      |
| Date Month            | {month}       | Month of event in format (Jan)                                                   |
| Date Day              | {day}         | Day of event in format (01)                                                      |
| Date End              | {end}         | End Date of event in format (Jan 01 2011)                                        |
| Times                 | {times}       | Full date and time of event in format (Jan 01 2011 10:30am - Jan 14 2011 5:00pm )|
| Location Name         | {locname}     | Location name of the event                                                       |
| Location Address      | {address}     | Location Address of the event                                                    |
| Google Map            | {googlemap}   | Google map of location                                                           |
| Slug                  | {slug}        | Slug format of sermon name (event-name-slug)                                     |
| Registration          | {register}    | Registration Link with linktext = Register                                       |

### Blogs

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of blog record                                                             |
| Image                 | {image}       | Image of blog record                                                             |
| Preview               | {preview}     | Preview of blog text (200 characters)                                            |
| Summary               | {summary}     | Summary of blog (200 characters)                                                 |
| Author                | {author}      | Author name of blog                                                              |
| Date                  | {date}        | Date of blog in format (Jan 01 2011)                                            |
| Text                  | {text}        | Blog full text                                                                   |
| Slug                  | {slug}        | Slug format of blog name (blog-name-slug)                                        |



##Styling
To update the colors for the document you will need to access /resources/sass/app.scss file. Sencha uses [Sass](http://sass-lang.com) syntax which is an extension of CSS3. In tandem with Sass they use [Compass](http://compass-style.org) which is an open-source css authoring framework with Sass as the basis. When you install compass it will include Sass. Read documentation on how to install and use Compass on their website <http://compass-style.org>.

To compile the app.scss in your terminal go to the /resources/sass/ folder.

	$ cd /path/to/resources/sass/

From there you can execute compass commands if it is installed.

	$ compass watch

Compass watch will listen for changes to the file and compile it and output app.css to the /resources/css/ folder for you. This will allow you to see change before you build your app.

>Here is a video on theming Sencha Touch applications. [Theming Sencha Touch](http://docs.sencha.com/touch/2-1/#!/guide/theming)

###App.scss
In the app.scss file there are several sass variables that can be edited to change the color scheme of mobile application. However, you have control to change it any way by viewing the sass variables in the [Sencha Touch Documentation](http://docs.sencha.com/touch/2-1/#!/guide)


### Icons/Web Font
In Sencha Touch 2.2.0 they have updated icons to use web fonts. ST2.2 is bundled with a select library of Pictos glyphs from their web font. <http://pictos.cc/font/>  In the app.scss file we must include the web fonts:

	@include icon-font('Pictos', inline-font-files('pictos/pictos-web.woff', woff, 'pictos/pictos-web.ttf', truetype,'pictos/pictos-web.svg', svg));


*Sencha Touch 2.2.0 has a new way to map a web font glyph to a specific name to use in iconCls.

[New Themes In Sencha Touch 2.2.0](http://www.sencha.com/blog/new-themes-in-sencha-touch-2-2?mkt_tok=3RkMMJWWfF9wsRokvqvNZKXonjHpfsX67uQpXaazlMI%2F0ER3fOvrPUfGjI4ITsB0aPyQAgobGp5I5FELTbTYS6Vzt6QPWg%3D%3D) :This article describes how to map a name to a specific web font glyph or you can view the app.scss file.

---

##Application Icons & Startup Screen
iOS allows you to add web apps to the home screen of your device.  You can assign icon to be used to identify your application.  These are located in the **resources/icons/** directory.  You will need to replace the **icon.png** & **icon@2x.png**. The second is for Retina displays.  You can just use these png files as template to create your own.

Secondly, the loading image when the application is started can be updated by going to **resources/loading/** directory.  You will need to update the Homescreen.jpg file. Currently the other image are of no use.


##Build
Building the application is going to require several things and one of those is using the terminal. First, you will need to make sure you have the latest version of Sencha Command (formerly Sencha SDK Tools). [Sencha Command](http://www.sencha.com/forum/showthread.php?252466-Sencha-Cmd-v3.0.2-is-Now-Available)

Installing Sencha Command adds Sencha specific commands for your terminal.

Next, get the application files from this repository and you will need to place them in a local directory.
In the root directory of the application there is an **app.json** file.  There is a variable at the top of that file called 'url', which will need to be changed to the root directory *path to your development directory* before building the app can take place.
Sencha Command when run takes all the assets(javascript, css), minifies and combines them and removes unneeded javascript classes. This allows the application to be as lean as possible for the mobile environment.

When you have your local server setup open your terminal and go to the directory of your application.

	$ cd /path/to/application

If you have installed Sencha Command tools, and have your url in the app.json file we can build the application by:

	$ sencha app build production

This will add a folder /build/ to your application, with a directory of /build/Monk Touch/production/ to your production app. In that folder will be your application assets to deploy to your website.

> Remember that you added a url in the setup.js file to the basePath variable. Make sure that path is where your application is located on your web server.

##Includes
Included in the repository is a folder called "modules". This includes all the files that generate the content of your application. Place this folder in the root directory of your website or wherever you point the variable basePath too.



##Testing
If you are testing your application locally don't forget to add the monkcms.php and monkcode.txt files from the site you are pulling data from to you root directory of your local web server.


##Additional Resources
* [SDK & Tools update](http://www.sencha.com/forum/showthread.php?192169-Important-SDK-Tools-Sencha-Command-Update)
* [Getting Started With Sencha Touch 2](http://docs.sencha.com/touch/2-0/#!/guide/getting_started)
* [Sencha Documentation](http://docs.sencha.com/touch/2-1/)

##Credits

Built with Sencha Touch 2.1.1
built by Adam Randlett @ [Monk Development](http://www.mokdevelopment.com)

