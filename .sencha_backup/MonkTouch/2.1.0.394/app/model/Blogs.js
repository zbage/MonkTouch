/**
 * @class Media
 * @extends Ext.data.Model
 * The Media model
 */
 Ext.define("MonkTouch.model.Blogs", {
 	extend: 'Ext.data.Model',
 	config:{
    fields: [
      {name: "title", type: "string"},
      {name: "text", type: "string"},
      {name: "date", type: "string"},
  		{name: "author", type: "string"},
  		{name: "preview", type: "string"},
  		{name: "image", type: "string"},
  		{name: "slug", type: "string"},
  		{name: "summary", type: "string"}
    ]
  }
});