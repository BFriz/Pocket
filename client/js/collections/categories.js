PocketApp.Collections.Category = Backbone.Collection.extend({
  url: 'http://localhost:3000/articles',
  model: PocketApp.Models.Category
})