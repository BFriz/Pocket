PocketApp.Views.ProfileView = Backbone.View.extend({
  el: '#app',
  className: 'box30 box articlething',
    events: {
    'submit form#add': 'createArticle',
    "click button.remove": 'removeArticle'
  },
  initialize: function () {
    console.log('init profile view')
    this.articleTemplate = _.template($('#tpl_article').html());
    this.template = _.template($('#profile_template').html() );

  },
  render: function () {
    // debugger;
    // var articleList = $('#articleList')
     // $('#articleList').append(articleView.render().el);
      // articleList.empty();

    console.log('render profile view')
    this.$el.html( this.template() );
     // var articleView = new PocketApp.Views.ArticleView({model: article})
     // $('#articleList').append(articleView.render().el);

  },
  close: function() {
    this.remove();
  },
  addArticle: function(url, category){
    // debugger;
    // Need to pass the url and categories so that the information is got by the article_view
    var article = new PocketApp.Models.Article({url: url, categories: category});
    // console.log('article created')
  //   // debugger;
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
    // debugger;
    // nil
  }
});