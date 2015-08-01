//We may need to change the url here
PocketApp.Collections.UserArticleList = Backbone.Collection.extend({
  url: 'http://localhost:3000/user_articles',
  model: PocketApp.Models.Article
})