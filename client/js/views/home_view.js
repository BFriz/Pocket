PocketApp.Views.HomeView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    console.log('init home view')
    this.template = _.template($('#article_template').html());
  },

  render: function () {    
    // this.$el.html( this.template() );
    var articleListView = new PocketApp.Views.ArticleListView({ collection: this.collection});
    var articlesHTML = articleListView.render();
    this.$el.append(articlesHTML.$el);
  },
});