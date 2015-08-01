PocketApp.Views.ArticleListView = Backbone.View.extend({
  tagName: 'div',
  id: 'article',
  initialize: function(){
    this.collection.fetch({
      success: function(collection, response, options) {
      },
      error: function(collection, response, options) {
        console.log('error')
      }
    })
  },
  render: function(){
    var articleList = $('#articleList');
    self = this;
    // // collection of all the articles from the article view
    this.collection.each(function(article){
      var articleView = new PocketApp.Views.ArticleView({model: article})
      // Below prepends the articleView div with an id article (each article) (need to save as self because with .each the context changes each time)
      self.$el.prepend(articleView.render().el)
    });
    return self;
  }
}); 