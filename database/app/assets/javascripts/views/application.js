// define([
//    'jquery',
//    'underscore',
//    'backbone',
//    'views/user_menu',
//    'text!templates/application.html'
// ], function($, _, Backbone, UserMenuView, ApplicationTemplate) {

//   return Backbone.View.extend({
//      el: "body",
//      render: function() {
//       var template = _.template(ApplicationTemplate);
//       this.$el.html(template());
     
//      var userMenuView = new UserMenuView();
//      // render the user menu
//      this.$('#user-menu').html(userMenuView.render().el);

//      return this.el;
//     }
//  });
// });