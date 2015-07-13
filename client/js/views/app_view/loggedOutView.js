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
    'click #login': 'login'
  },

  login: function (event) {
    var username = $('#username').val();
    var password = $('#password').val();

    console.log('username: ', username, 'password :', password);

    event.preventDefault();

    var request = $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/login',
      data: { 
        username: username,
        password: password
      }
    //what to do on success
    }).done(function (data) {
      if (data.success === true) {
        //update the PocketApp currentUser variable
        PocketApp.currentUser = data.username;
        //change view to logged out
        var view = new PocketApp.Views.loggedInView();
        view.render();
      } else {
        //update the PocketApp currentUser variable
        PocketApp.currentUser = '';
      }
    });
  }
});