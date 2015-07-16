PocketApp.Views.HomeView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    console.log('init home view')
    
    this.template = _.template($('#article_template').html() );
  },

  render: function () {
    console.log('render profile view')
    this.$el.html( this.template() );
  },

  events: {

  }
});