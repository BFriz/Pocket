Article.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    var articleListView = new Article.TodoListView({collection: Article.List});
    articleListView.render();
  }
})