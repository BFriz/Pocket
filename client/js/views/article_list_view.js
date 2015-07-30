PocketApp.Views.ArticleListView = Backbone.View.extend({
  tagName: 'div',
  id: 'article',
  events: {
    'click button#search_articleList': 'articleSearch',
    'click button.sortBy': 'sortBy'
  },
  initialize: function(){
    // this.template = _.template($('#tpl-article').html());
    this.collection.bind('add remove change', this.render, this);    
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
      self.$el.prepend(articleView.render().el)
    });
    return self;
  }
}); 