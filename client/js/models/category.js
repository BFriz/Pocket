PocketApp.Models.Category = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/categories',
  defaults: {
    name: ''
  }
})