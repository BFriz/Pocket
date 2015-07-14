define([
   'jquery',
   'underscore',
   'backbone',
   'models/user_registration',
   'text!templates/users/sign_up.html',
], function($, _, Backbone, UserRegistration, UserSignUpTemplate) {
  
   return Backbone.View.extend({
     el: "main",

     render: function() {
       var template = _.template(UserSignUpTemplate);
       this.$el.html(template());
       return this.el;
    },

    events: {
      "click #signup": "signUp"
    },

   signUp: function(){
     console.log("sign up callback")
   }
 });
});