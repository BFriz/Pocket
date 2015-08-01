PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    'profile': "profile",
    'users/sign_in' : 'signIn'
  },
  index: function() {
    PocketApp.Views.HomeView = new PocketApp.Views.HomeView({collection: PocketApp.articles});
    PocketApp.Views.HomeView.render();

    // var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    // articleListView.render();
  },
  signIn: function() {
    var token = Cookies.get('authentication_token')
    if (!!token) {
      PocketApp.router.navigate('#profile', {trigger: true});
    } else {
      var loggedOutView = new PocketApp.Views.loggedOutView();
      loggedOutView.render();
    }
  },
  profile: function(){
    var token = Cookies.get('authentication_token')
    if (!!token) {
      this.getCurrentUser(token);
    } else {
      var loggedOutView = new PocketApp.Views.loggedOutView();
      loggedOutView.render();
    }
  },
  getCurrentUser: function(token) {
    console.log('getCurrentUser');
    $.get('http://localhost:3000/users/' + token, function(response) {
      //In the response we are including the current_users articles  
      PocketApp.currentUser = response;
      PocketApp.userArticles = new PocketApp.Collections.UserArticleList();
      var profileView = new PocketApp.Views.ProfileView({ collection: PocketApp.userArticles });
      // profileView.render();
        var view = new PocketApp.Views.loggedInView();
        view.render();
      // })
    })
  }
});
