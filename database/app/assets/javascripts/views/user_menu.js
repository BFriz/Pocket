// define([
//    'jquery',
//    'underscore',
//    'backbone',
//    'models/user_session',
//    'text!templates/user_menu.html'
// ], function($, _, Backbone, UserMenuTemplate){
//    return Backbone.View.extend({
//     render: function(){
//       var user = new UserSession();
//       var template = _.template(UserMenuTemplate);
//       this.$el.html(template());
//       return this;
//     }
//   })
// })