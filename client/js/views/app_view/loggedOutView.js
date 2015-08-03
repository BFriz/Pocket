PocketApp.Views.loggedOutView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    $(this.el).undelegate('#login', 'click');
    
    this.template = _.template($('#loggedOutView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'submit form#login': 'login',
    'submit form#signup': 'signup'
  },
  signup: function () {
    var email = $('#email-signup').val();
    var password = $('#password-signup').val();
    var password_confirmation = $('#password-confirmation-signup').val();
    
    console.log('email: ', email, 'password :', password, 'password-confirmation:', password_confirmation);
    event.preventDefault();

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost:3000/users',
      data: { 
        registration: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      }
    }).done(function (data) {
      debugger; 
      login();
      PocketApp.router.navigate('/#profile', true);
      PocketApp.Views.appview = new PocketApp.Views.appView();
      PocketApp.Views.appview.render();
    }).fail(function(err) {
      alert(err.responseText)
    })

  },

  login: function (event) {
    var email = $('#email').val();
    var password = $('#password').val();
    console.log('email: ', email, 'password :', password);
    event.preventDefault();
    var request = $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost:3000/users/sign_in',
      data: { 
        email: email,
        password: password
      }
    //what to do on success
    }).done(function (data) {
      debugger;
        console.log('logged in')
        PocketApp.currentUser = data;
        Cookies.set('authentication_token', data.authentication_token);
        PocketApp.router.profile('#profile', {trigger: true})
    }).fail(function(err) {
      alert(err.responseText)
    })
  }
});