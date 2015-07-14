define([
   'underscore',
   'backbone'
], function(_, Backbone){

   return Backbone.Model.extend({
    url: "/users/sign_in.json",
    defaults: {
      id: null,
      email: '',
      password: '',
      firstname: '',
      authentication_token: null
    },
    isLoggedIn: function() {
      // !! to change to a boolean
      return !!this.get("authentication_token");
    }
  });
});