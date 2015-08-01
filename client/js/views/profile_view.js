PocketApp.Views.ProfileView = Backbone.View.extend({
  el: '#app',
  className: 'box20 box articlething',
    events: {
    'submit form#add': 'createArticle',
    // 'keyup .search-query' : 'search'
    },
  initialize: function () {
    this.template = _.template($('#profile_template').html() );
    this.collection.bind('add remove', this.renderWrapper, this);
  },
  render: function () {
    console.log('in the render profile')
    var articleListView = new PocketApp.Views.ArticleListView({ collection: this.collection});
    var articlesHTML = articleListView.render();
    this.$el.html(this.template());
    this.$el.find('#articleList').empty();    
    this.$el.find('#articleList').append(articlesHTML.$el);
  },
  renderWrapper: function () {
    console.log('in the renderWRAPPER profile')

     var articleListView = new PocketApp.Views.ArticleListView({ collection: this.collection});
    var articlesHTML = articleListView.render();
    this.$el.html(this.template());
    this.$el.find('#articleList').empty();    
    this.$el.find('#articleList').append(articlesHTML.$el);
  
  },
  addArticle: function(url, category){
    // Need to pass the url and categories so that the information is got by the article_view
    var article = new PocketApp.Models.Article({url: url, categories: category});
    this.collection.create(article);
  },
  createArticle: function(event){
    event.preventDefault();
    var url = this.$('#url-upload');
    var category = this.$('#category-upload');
    this.addArticle(url.val(), category.val());
    url.val('');
    category.val('');
  },
  search: function (){
    this.search = new PocketApp.Views.Search();
  }

});