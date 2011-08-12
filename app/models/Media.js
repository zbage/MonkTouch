/**
 * @class Media
 * @extends Ext.data.Model
 * The Media model
 */
Ext.regModel("Media", {
    fields: [
        {name: "title", type: "string"},
        {name: "text", type: "string"},
        {name: "date", type: "string"},
		{name: "audio", type: "string"},
		{name: "video", type: "string"},
		{name: "image", type: "string"},
		{name: "thmb", type: "string"}
    ],
    
     proxy:{
			type:'ajax',
			url:'/mobile/lib/mk-modules/sermons.php',
			reader:{
				type:'json',
				root:'items'
			}
		}
});