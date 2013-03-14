Ext.define('MonkTouch.view.Carousel', {
  extend:'Ext.carousel.Carousel',
  //requires:['MonkTouch.view.ImageViewer'],
  xtype:'imgcarousel',
  config:{
  	images: false,
  	imageField: 'image_url',
  	previewField: 'image_thumbnail_url'
	//,captionField: 'caption' // NOT YET IMPLEMENTED
    /*control:{
      this:{
        ondragstart:'onDragStart',
        ondrag:'onDrag',
        ondragend:'onDragEnd'
      }
    }*/
  },
	initilize: function() {

		this.items = this.items || [];
	// initialize items from an array of URLs or configs
		Ext.each(this.images, this.addImage, this);

	},

	addImage: function(image, doLayout) {

		image = Ext.apply({
			 xtype: 'imageviewer'
			,initOnActivate: true
			,loadingMask: this.loadingMask
		}, typeof image == "string" ? {imageSrc: image} : image);

		if(this.rendered)
		{
			this.add(image);

			if(doLayout !== false){
				this.doLayout();}
		}
		else
		{
			this.items.push(image);
		}
	},

	// suppress carousel drag on multi-touch
	onDragStart: function(e) {
		if(e.targetTouches.length == 1){
			Ext.carousel.Carousel.prototype.onDragStart.call(this, e);
    }
/*
		if(e.targetTouches.length == 1 && (!this.getActiveItem().scroller || this.getActiveItem().scroller.disabled))
			Ext.Carousel.prototype.onDragStart.call(this, e);
		else
			console.log('suppressing drag start');
*/
	},
	onDrag: function(e) {
		if(e.targetTouches.length == 1){
			Ext.carousel.Carousel.prototype.onDrag.call(this, e);
    }
/*
		if(e.targetTouches.length == 1 && (!this.getActiveItem().scroller || this.getActiveItem().scroller.disabled))
			Ext.Carousel.prototype.onDrag.call(this, e);
		else
			console.log('suppressing drag');
*/
	},
	onDragEnd: function(e) {
		if(e.targetTouches.length < 2){
			Ext.carousel.Carousel.prototype.onDragEnd.call(this, e);
    }
/*
		if(e.targetTouches.length < 2 && (!this.getActiveItem().scroller || this.getActiveItem().scroller.disabled))
			Ext.Carousel.prototype.onDragEnd.call(this, e);
		else
			console.log('suppressing drag end');
*/
	}

});