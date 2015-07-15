PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    'profile': "profile",
    'users/sign_in' : 'signIn',
    'users/sign_up' : 'signUp'
  },
  // home page - where articles are located
  index: function() {
    // PocketApp.Views.appview = new PocketApp.Views.appView();
    // PocketApp.Views.appview.render();
    // var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    // articleListView.render();

     // var articleView = new PocketApp.Views.ArticleView({model: article})
     //   $('#articleList').append(articleView.render().el);
     //    });
  },
  signIn: function() {
    console.log("sign in route");
    PocketApp.Views.appview = new PocketApp.Views.appView();
    PocketApp.Views.appview.render();
    // var view = new PocketApp.Views.loggedOutView();
    // view.render();
  },
  signUp: function(){
    // new SignUpView().render();
  },
  profile: function(){
    console.log("profile route")

    var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    articleListView.render();
  }
});

  // },
  //page of the specfic user - shows groups and articles for current user
//   profile: function () {
//     var profile = new PocketApp.Views.profilePage();
//     profile.render()
//   }
// });
// After article_list_view comes here and renders articleListView onto the site - then heads to do backbone stuff then to script.js






