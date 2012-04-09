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
      xtype:'audio',
      url:config.audio,
      loop:false
    };
    
    if(Ext.os.is.Android){
      
     var items = [
       {
         xtype: 'button',
         text: 'Play',
         margin:20,
         handler: function() {
             var audio = this.getParent().down('audio');
         
             if (audio.isPlaying()) {
                 audio.pause();
                 this.setText('Play');
             } else {
                 audio.play();
                 this.setText('Pause');
             }
         }
       },
       Ext.apply({},audioBase,{
         enableControls:false
       })
     ];
     
     Ext.apply(config,{
       items:items
     });
      
      
    }else{
      
      Ext.apply(config,{
        items:[
          Ext.apply({},audioBase,{
            enableControls:true
          })
        ]
      });
    }
    this.callParent([config]);
  }
});