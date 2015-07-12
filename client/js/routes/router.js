PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  index: function() {
    var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    articleListView.render();
  }
})
// After article_list_view comes here and renders articleListView onto the site - then heads to do backbone stuff then to script.js