PocketApp.Views.loggedOutView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    //unbind any existing event handlers
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
    event.preventDefault();
    
    var email = $('#email-signup').val();
    var password = $('#password-signup').val();
    var password_confirmation = $('#password-confirmation-signup').val();
    
    console.log('email: ', email, 'password :', password, 'password-confirmation:', password_confirmation);
    


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
      PocketApp.router.navigate('/', true);
      PocketApp.Views.appview = new PocketApp.Views.appView();
      PocketApp.Views.appview.render();
    }).fail(function(err) {
      alert()
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
        console.log('logged in')
        PocketApp.currentUser = data;
        Cookies.set('authentication_token', data.authentication_token);
        PocketApp.router.profile('#profile', {trigger: true})
    }).fail(function(err) {
      alert(err.responseText)
    })
  }
});