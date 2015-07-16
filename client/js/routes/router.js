PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    'profile': "profile",
    'users/sign_in' : 'signIn'
  },
  // home page - where articles are located
  index: function() {
    PocketApp.Views.HomeView = new PocketApp.Views.HomeView();
    PocketApp.Views.HomeView.render();

    var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    articleListView.render();

  },
  signIn: function() {
    console.log("sign in route");

    var token = Cookies.get('authentication_token')
    if (!!token) {
      this.getCurrentUser(token);
    } else {
      var loggedOutView = new PocketApp.Views.loggedOutView();
      loggedOutView.render();
    }
  },
  profile: function(){
    console.log("profile route")
    var token = Cookies.get('authentication_token')
    if (!!token) {
      this.getCurrentUser(token);
      var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
      // articleListView.render();
    } else {
      var view = new PocketApp.Views.loggedOutView();
      view.render();
    }
  },
  getCurrentUser: function(token) {
    $.get('http://localhost:3000/users/' + token, function(response) {
      PocketApp.currentUser = response;
      PocketApp.router.navigate('#profile', {trigger: true})
      var profileView = new PocketApp.Views.ProfileView({ collection: PocketApp.articles });
      profileView.render();
      var view = new PocketApp.Views.loggedInView();
      view.render();
    })
  }
});
