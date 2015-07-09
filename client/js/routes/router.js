PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    // articleListView.render();
  }
})