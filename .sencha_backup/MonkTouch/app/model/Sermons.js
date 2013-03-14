/**
 * @class Sermons
 * @extends Ext.data.Model
 * The Media model
 */
Ext.define("MonkTouch.model.Sermons", {
  extend: 'Ext.data.Model',
  config:{
    fields: [
      {name: "title", type: "string"},
      {name: "text", type: "string"},
      {name: "summary", type: "string"},
      {name: "preview", type: "string"},
      {name: "date", type: "string"},
      {name: "audio", type: "string"},
      {name: "video", type: "string"},
      {name: "embed", type: "string"},
      {name: "image", type: "string"},
      {name: "thmb", type: "string"},
      {name: "author", type:"string"},
      {name: "passage", type:"string"},
      {name: "category", type:"string"},
      {name: "series", type:"string"},
      {name: "seriesimage", type:"string"},
      {name: "tags", type:"string"},
      {name: "embedtype",type:"string",mapping:"embed.type"},
      {name: "embedsrc",type:"string",mapping:"embed.media_id"},
      {name: "embed",type:"string",mapping:"embed.code"},
      {name: "notes",type:"string"},
      {name: "featured",type:"string"}
    ]
  }
});