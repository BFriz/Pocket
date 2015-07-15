PocketApp.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    'users/sign_in' : 'signIn',
    'users/sign_up' : 'signUp'
  },
  // home page - where articles are located
  index: function() {
    var articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
    // console.log(this)
    articleListView.render();

     // var articleView = new PocketApp.Views.ArticleView({model: article})
     //   $('#articleList').append(articleView.render().el);
     //    });
  },
  signIn: function() {
   console.log("sign in route");
   
  },
  signUp: function(){
    new SignUpView().render();
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






