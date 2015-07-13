PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    //home
    "": "index",
    //Profile page
    'profile/:id': 'profile'
  },
  //home page - where articles are located
  index: function() {
    var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    articleListView.render();
  },
  //page of the specfic user - shows groups and articles for current user
  profile: function () {
    var profile = new PocketApp.Views.profilePage();
    profile.render()
  }
})
// After article_list_view comes here and renders articleListView onto the site - then heads to do backbone stuff then to script.js