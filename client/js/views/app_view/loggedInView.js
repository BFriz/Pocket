PocketApp.Views.loggedInView = Backbone.View.extend({
  el: '#user-login',

  initialize: function () {
    //unbind any existing event handlers
    console.log('loggedInView')
    $(this.el).undelegate('#logout', 'click');

    this.template = _.template($('#loggedInView').html() );
  },

  render: function () {
    console.log('render loggedInView')

    this.$el.html( this.template() );
  },

  events: {
    'click button#logout': 'logout'
  },
  logout: function (event) {
    console.log('logout?')

    event.preventDefault();

    var token = Cookies.get('authentication_token')

    var request = $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/users/' + token
    //what to do on success
    }).done(function (data) {
      PocketApp.currentUser = {};
      Cookies.remove('authentication_token')
      //take the user back to the home page and re-render
      PocketApp.router.index('', {trigger: true})

      // PocketApp.router.navigate('/', true);
      // PocketApp.Views.appview = new PocketApp.Views.appView();
      // PocketApp.Views.appview.render();
    }).fail(function(error) {
      console.log(error)
    })

  }
});