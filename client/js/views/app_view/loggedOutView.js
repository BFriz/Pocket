PocketApp.Views.loggedOutView = Backbone.View.extend({
  el: '#user',

  initialize: function () {
    //unbind any existing event handlers
    $(this.el).undelegate('#login', 'click');
    
    this.template = _.template($('#loggedOutView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  },

  events: {
    'submit form#login': 'login'
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
        PocketApp.router.navigate('#profile')
        var view = new PocketApp.Views.loggedInView();
        view.render();
    });
  }
});