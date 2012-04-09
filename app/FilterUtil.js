Ext.define('MonkTouch.FilterUtil',{
    //creates instance upon load
    singleton: true,  
    getFilters:function(items){
		var obj = [];
		if(items === null || items === undefined){
			return obj;
		}else{
			if(items.hasOwnProperty('howmany')){
				obj.push(
					{
						property : "howmany",
						value    : items['howmany']
					}
				)
			}
			if(items.hasOwnProperty('howmanydays')){
				obj.push(
					{
						property : "howmanydays",
						value    : items['howmanydays']
					}
				)
			}
			if(items.hasOwnProperty('category')){
				obj.push(
					{
						property : "category",
						value    : items['category']
					}
				)
			}
			if(items.hasOwnProperty('series')){
				obj.push(
					{
						property : "series",
						value    : items['series']
					}
				)
			}
			if(items.hasOwnProperty('group')){
				obj.push(
					{
						property : "group",
						value    : items['group']
					}
				)
			}
			if(items.hasOwnProperty('blogname')){
				obj.push(
					{
						property : "blogname",
						value    : items['blogname']
					}
				)
			}
			if(items.hasOwnProperty('id')){
				obj.push(
					{
						property : "id",
						value    : items['id']
					}
				)
			}
			if(items.hasOwnProperty('name')){
				obj.push(
					{
						property : "name",
						value    : items['name']
					}
				)
			}
			if(items.hasOwnProperty('galleryid')){
				obj.push(
					{
						property : "galleryid",
						value    : items['galleryid']
					}
				)
			}
			if(items.hasOwnProperty('order')){
				obj.push(
					{
						property : "order",
						value    : items['order']
					}
				)
			}
			if(items.hasOwnProperty('hide_series')){
				obj.push(
					{
						property : "hide_series",
						value    : items['hide_series']
					}
				)
			}
			if(items.hasOwnProperty('hide_category')){
				obj.push(
					{
						property : "hide_category",
						value    : items['hide_category']
					}
				)
			}
			if(items.hasOwnProperty('preacher')){
				obj.push(
					{
						property : "preacher",
						value    : items['preacher']
					}
				)
			}
			if(items.hasOwnProperty('author')){
				obj.push(
					{
						property : "author",
						value    : items['author']
					}
				)
			}
			if(items.hasOwnProperty('authors')){
				obj.push(
					{
						property : "authors",
						value    : items['authors']
					}
				)
			}
			if(items.hasOwnProperty('tags')){
				obj.push(
					{
						property : "tags",
						value    : items['tags']
					}
				)
			}
			if(items.hasOwnProperty('passage')){
				obj.push(
					{
						property : "tags",
						value    : items['tags']
					}
				)
			}
			if(items.hasOwnProperty('hide_group')){
				obj.push(
					{
						property : "hide_group",
						value    : items['hide_group']
					}
				)
			}
			if(items.hasOwnProperty('location')){
				obj.push(
					{
						property : "location",
						value    : items['location']
					}
				)
			}
			if(items.hasOwnProperty('state')){
				obj.push(
					{
						property : "state",
						value    : items['state']
					}
				)
			}
			if(items.hasOwnProperty('near')){
				obj.push(
					{
						property : "near",
						value    : items['near']
					}
				)
			}
			if(items.hasOwnProperty('radius')){
				obj.push(
					{
						property : "radius",
						value    : items['radius']
					}
				)
			}
    //***//
		}
		return obj;
	}
});
 

