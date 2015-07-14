PocketApp.Views.loggedInView = Backbone.View.extend({
  el: '#user',

  initialize: function () {
    //unbind any existing event handlers
    console.log('loggedInView')
    $(this.el).undelegate('#logout', 'click');

    this.template = _.template($('#loggedInView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'click button#logout': 'logout'
  },
  logout: function (event) {
    console.log('logout?')

    event.preventDefault();

    var request = $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/users/sign_out'
    //what to do on success
    }).done(function (data) {
      //set currentUser to blank
      // Cookies.remove('authentication_token')
      PocketApp.currentUser = '';
      //take the user back to the home page and re-render
      PocketApp.router.navigate('/', true);
      PocketApp.appView.render();
    }).error(function(error) {
      console.log(error)
    })

  }
});