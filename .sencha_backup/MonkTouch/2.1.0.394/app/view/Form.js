Ext.define('MonkTouch.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'form-section',   
    config: {
      styleHtmlContent: true,
      scrollable:true
    },
    constructor : function(config) {
   		Ext.apply(config, {
        items:[
          {
            xtype:'titlebar',
            docked:'top',
            title:config.title,
            items:[
              { 
                xtype:'button',
                text:'Done',
                id:'form-done-btn'
              }
            ]
          }
        ],
        control:{
          'button[id=form-done-btn]':{
            tap:function(){
                this.hide();
            }
          }
        }
   		});

      var store = Ext.getStore(config.storeName),
         me = this;
         store.getProxy().setExtraParams(config.filters);

         me.on({
          show:function(){
          Ext.Viewport.setMasked({xtype:'loadmask'});
           store.load({
            callback:function(){
              var output = store.first();
              me.setHtml(output.data.text);
              Ext.Viewport.setMasked(false);
            
              me.element.on({
                tap:function(e){
                  e.preventDefault();
                  var object = {};
                  var els = document.getElementsByTagName("form")[0].elements;
                  for(var i=0; i< els.length; i++){
                    if(els[i].nodeName != "FIELDSET"){
                      var name = els[i].name,
                         value = els[i].value;
                      object[name] = value;
                    }
                  }
                  Ext.util.JSONP.request({
                      params: object,
                      url: 'http://my.ekklesia360.com/Module/Form/API/Submit.php',
                      callbackKey: 'callback',
                      scope: 'this',
                      success: function(response) {
                        console.log(response.responseText);
                      },
                      failure: function(response) {
                        console.log("FAILURE: " + response.responseText);
                        console.log(response);
                      }
                  });
                },
                delegate: 'input[type="submit"]'
              });
            },
            scope:this
           });
          }
        });
      this.callParent([config]);
    }
}); 