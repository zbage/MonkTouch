Ext.define('MonkTouch.view.List', {
    extend : 'Ext.dataview.List',
    xtype  : 'listitems',
    config:{
      scrollable:true,
      ui:'normal',
      grouped:false
      //styleHtmlContent:false
    },
    constructor : function(config) {

        //var store = Ext.getStore(config.storeName);
         var me = this;

         var store = Ext.create('MonkTouch.store.' + config.storeName);

         /*store.setGrouper({
           groupFn: function(record){
              return record.get('series');
           }
         });*/

         //proxy = store.getProxy();
         //Ext.apply(store.getProxy().extraParams,MonkTouch.FilterUtil.getFilters(config.filters));
         store.getProxy().setExtraParams(config.filters);
         //console.log(store.getProxy());
         //store.setFilters(MonkTouch.FilterUtil.getFilters(config.filters));
         //proxy.setCacheKey(this.getId());

        //me.setMasked(true);

        Ext.Viewport.setMasked({xtype:'loadmask'});

    		Ext.apply(config, {
    	     store : store,
           plugins:[{
            type:'listpaging',
            autoPaging:true,
            loadMoreText: 'MORE',
            noMoreRecordsText: ''
           }]
    		});

        /*store.addBeforeListener('load',function(stre,records,success){
              // var pageSize = store.getPageSize();
              // var pageIndex = store.currentPage -1;
              // if(success && records.length < pageSize){
              //    var totalRecords = pageIndex * pageSize + records.length;
              //    store.setTotalCount(totalRecords);
              // }else{
              //    store.setTotalCount(null); //if store total count is null listpage plugin know there is no more records.
              // }
        },this);*/

        me.on({
          show:function(){
            var listLength = me.getItems().length;
            if(store.getTotalCount() === null || store.getTotalCount() === 0){
              store.load(function(records,stre,success){
                Ext.Viewport.setMasked(false);
              });
            }
          }
        })

      this.callParent([config]);
    }
});