/**
 * @class Photos
 * @extends Ext.data.Model
 * The Photos model
 */
 Ext.define("MonkTouch.model.Photos", {
 	extend: 'Ext.data.Model',
 	config:{

    fields: [
      {name: "title", type: "string"},
      {name: "description", type: "string"},
  		{name: "photo", type: "string"}, 
  		{name: "thumb", type: "string"},
  		{name: "number", type: "string"}
    ]
  }
});
