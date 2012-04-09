/**
 * @class Galleries
 * @extends Ext.data.Model
 * The Galleries model
 */
 Ext.define("MonkTouch.model.Galleries", {
 	extend: 'Ext.data.Model',
 	config:{
    fields: [
        {name: "title", type: "string"},
        {name: "thmb", type: "string"},
        {name: "preview", type: "string"},
    		{name: "date", type: "string"},
    		{name: "number", type: "string"},
    		{name: "slug", type: "string"}
    ]
	}
});
