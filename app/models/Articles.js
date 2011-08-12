/**
 * @class Articles
 * @extends Ext.data.Model
 * The Articles model
 */
Ext.regModel("Articles", {
    fields: [
        {name: "title", type: "string"},
        {name: "text", type: "string"},
        {name: "date", type: "string"},
		{name: "author", type: "string"},
		{name: "preview", type: "string"},
		{name: "image", type: "string"},
		{name: "slug", type: "string"}
    ],
    
     proxy:{
			type:'ajax',
			url:'/mobile/lib/mk-modules/articles.php',
			reader:{
				type:'json',
				root:'items'
			}
		}
});