/**
 * @class Section
 * @extends Ext.data.Model
 * The Section model
 */
Ext.define("MonkTouch.model.Section", {
	extend: 'Ext.data.Model',
	config:{
    fields: [
        {name: "text", type: "string"}
    ]
	}
});