PocketApp.Views.appView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.template = _.template($('#appView').html() );
  },

  render: function () {
    this.$el.html( this.template() );

    if (PocketApp.currentUser) {
      var view = new PocketApp.Views.loggedInView();
      view.render();
    } else {
      var view = new PocketApp.Views.loggedOutView();
      view.render();
    }
  }
});

// CurrentUser --> Loggedout or loggedInView