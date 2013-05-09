Ext.define('MonkTouch.view.AudioPlayer', {

  extend:'Ext.Container',
  requires:'Ext.Audio',
  xtype: 'audioplayer',
  config:{
    layout:{
      type:'vbox',
      pack:'center'
    }
  },

  constructor:function(config){
    var audioBase = {
      xtype: 'audio',
      url: config.audio,
      loop: false
    };

    Ext.apply(config,{
      items:[
        Ext.apply({},audioBase,{
          enableControls:true
        })
      ]
    });

    this.callParent([config]);
  }
});