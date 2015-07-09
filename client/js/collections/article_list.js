PocketApp.Collections.ArticleList = Backbone.Collection.extend({
  url: 'http://localhost:3000/articles',
  model: PocketApp.Models.Article
})