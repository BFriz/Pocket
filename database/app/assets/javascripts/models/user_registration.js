define([
   'underscore',
   'backbone'
], function(_, Backbone){
  return Backbone.Model.extend({
    url: "/users.json",
   defaults: {
      id: null,
      email: '',
      password: '',
      password_confirmation: '',
      firstname: '',
      lastname: ''
   }
  });
});
  signUp: function(){
   var user = new UserRegistration();
    user.save({
      email: $("input[name='email']").val(),
      firstname: $("input[name='firstname']").val(),
      password: $("input[name='password']").val(),
      password_confirmation: $("input[name='password_confirmation']").val()
  }, {
    success: function(){},
    $('.alert').css("color", "green");
    $('.alert ul').empty();
    _(response).each(functino(message){
      $('.alert ul').append("<li>"+message+"</li>")
    })
  },
    error: function(model, response){
      var errors = response.responseJSON;
      $('.alert ul').empty();
      $('.alert').css("color", "red");
      _(errors).each(function(error){
        $('.alert ul').append("<li>"+error+"</li>")
      })
     }
   })
  }