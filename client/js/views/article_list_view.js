PocketApp.Views.ArticleListView = Backbone.View.extend({
  tagName: 'div',
  id: 'article',
  initialize: function(){
    // if (PocketApp.currentUser){
    //   this.collection.fetch({
    //     data: {user: PocketApp.currentUser.id}
    //   }).done(function(){
    //     console.log('success, usersartciles');
    //   })
    // } else {
    //   this.collection.fetch().done(function(){
    //     console.log('success');
    //   })
    // }
  },
  render: function(){
    var articleList = $('#articleList');
    self = this;
    // debugger;
    // // collection of all the articles from the article view
    this.collection.each(function(article){
      var articleView = new PocketApp.Views.ArticleView({model: article})
      // Below prepends the articleView div with an id article (each article) (need to save as self because with .each the context changes each time)
      self.$el.prepend(articleView.render().el)
    });
    return self;
  }
}); 