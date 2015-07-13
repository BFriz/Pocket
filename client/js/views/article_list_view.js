PocketApp.Views.ArticleListView = Backbone.View.extend({
  el: '#article',
  events: {
    'submit form#add': 'createArticle',
    "click button.remove": 'removeArticle'
    // 'click button.edit': 'editArticle',
    // 'click button.save': 'saveArticle'
  },
  initialize: function(){
    // this.template = _.template($('#tpl-article').html());
    this.collection.bind('add remove change', this.render, this);
    this.collection.fetch({
      success: function(collection, response, options) {
        console.log(response)
        console.log('woo')
      },
      error: function(collection, response, options) {
        console.log('error')
      }
    })
  },
  render: function(){
    // debugger;
    console.log('article list view render')
    // Select with id of ArticleList from index.html
    var articleList = $('#articleList')
    articleList.empty();
    // debugger;
    // this.$el.html(this.template(this.model.toJSON()));
    // return this;
    // collection of all the articles from the article view
    this.collection.each(function(article){
      console.log(article)
      var articleView = new PocketApp.Views.ArticleView({model: article})
      $('#articleList').append(articleView.render().el);
    });
    //After the above code heads of to the router APP
  },
  addArticle: function(url, category){
    var article = new PocketApp.Models.Article({url: url, categories: category});
    //var category = new PocketApp.Models.Category({name: category});

    console.log('article created')

    this.collection.create(article);
  },
  createArticle: function(event){
    event.preventDefault();
    var url = this.$('#url-upload');
    var category = this.$('#category-upload');
    // debugger;
    this.addArticle(url.val(), category.val());
    url.val('');
    category.val('');

  }
 
}); 