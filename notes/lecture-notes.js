/*
Superclass properties

All:
- initialize - invoked whenever a Backbone instance of view, model or collection is created

View:
- tagName (defaults to 'div')
- template - use underscore template function (<%= [property from this.model.attributes] %>)
- events - list of listeners on model
- render (good practice in render function is to return this and call render().el)
  -- can also return this.$el.html() and call render()
- initialize binds view to a model or collection
- el or $el (as a jQuery container) binds the view to an element (this.tagName)
  - el is empty until it is rendered using (this.render())

Collection:
- model

Model:
- defaults to create a new model entry


OK to access attributes for display - not OK to get or set them via this.attributes
*/

// Index of Files
// data.js - Defines an array of data regarding song files and their accompanying details.
