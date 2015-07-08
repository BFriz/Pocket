Article.Article_list = Backbone.Collection.extend({
  url: '/articles',
  model: Article.Content
})