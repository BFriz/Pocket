PocketApp.Views.appView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.template = _.template($('#appView').html() );
  },

  render: function () {
    console.log('app view rendered')
    this.$el.html( this.template() );
  //   var articleListView;
  //   var token = Cookies.get('authentication_token')
  //   console.log('logged in? ' + !!token)
  //   if (!!token) {
  //     this.getCurrentUser(token);
  //     // articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
  //     // articleListView.render();
  //   } else {
  //     var view = new PocketApp.Views.loggedOutView();
  //     view.render();
  //     // articleListView = new PocketApp.Views.ArticleListView({ collection: PocketApp.articles });
  //     // articleListView.render();
  //   }
  // },
  // getCurrentUser: function(token) {
  //   $.get('http://localhost:3000/users/' + token, function(response) {
  //     PocketApp.currentUser = response;
  //     var view = new PocketApp.Views.loggedInView();
  //     view.render();
  //   })
  },
  renderPage: function(view) {
    console.log('renderPage' + view)
    var currentView
  }
});