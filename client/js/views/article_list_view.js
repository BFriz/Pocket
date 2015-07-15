PocketApp.Views.ArticleListView = Backbone.View.extend({
  el: '#article',
  events: {
    'submit form#add': 'createArticle',
    "click button.remove": 'removeArticle',
    'click button#search_articleList': 'articleSearch',
    'click button.sortBy': 'sortBy'
    // "click button#search_button": "doSearch" 
    // 'click button.save': 'saveArticle'
  },
  initialize: function(){
    // this.template = _.template($('#tpl-article').html());
    console.log(this)
    this.collection.bind('add remove change', this.render, this);
    this.collection.fetch({
      success: function(collection, response, options) {
        // console.log(response)
        // console.log('woo')
      },
      error: function(collection, response, options) {
        console.log('error')
      }
    })
  },
  render: function(){
    // debugger;
    // console.log('article list view render')
    // Select with id of ArticleList from index.html
    var articleList = $('#articleList')
    // debugger;
    articleList.empty();
    // debugger;
    // this.$el.html(this.template(this.model.toJSON()));
    // return this;
    // collection of all the articles from the article view
    this.collection.each(function(article){
      // console.log(article)
      var articleView = new PocketApp.Views.ArticleView({model: article})
      $('#articleList').append(articleView.render().el);
      //Pass variables in using Underscore.js Template
      var variables = { search_label: "My Search" };
      // Compile the template using underscore
      // var template = _.template( $("#search_template").html(), variables );
      // Load the compiled HTML into the Backbone "el"
      // debugger;
      // this.$el.html( template );
    });
    //After the above code heads of to the router APP
  },
  addArticle: function(url, category){
    var article = new PocketApp.Models.Article({url: url, categories: category});
    debugger;
    article.scrapedata
    //var category = new PocketApp.Models.Category({name: category});
    // console.log('article created')

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
  },
    articleSearch: function() {
      // debugger;
    // grab the juery list that holds the list of articles and empty it
    var articleList = $('#search_articleList');
    console.log('Working?')
    articleList.empty();
    // store a copy of the accounts from our backbone collection
    var article = PocketApp.collections.articleList.models;
    // set search term to lowercase
    var search = $("#index-search-js").val().toLowerCase();
    // iterate over backbone collection (accounts) and run control flow to catch matches
    $.each(article, function(i,e) {
      var curr_acc = e.attributes.name;
      if (curr_acc.toLowerCase().includes(search) === true) {
        accountList.append('<div class="mcc-account">'+curr_acc+'</div>')
      }       
    });
    // If there are no matches append a notification
    $('.mcc-account').length === 0 ? accountList.append('<li>--No accounts found--</li>') : false;
  },
  sortBy: function() {
    debugger;
    this.collection.models
  }
  // },
           
  // doSearch: function( event ){
  //   debugger;
  //   // Button clicked, you can access the element that was clicked with event.currentTarget
  //   alert( "Search for " + $("#search_input").val() );

  //   }


 
}); 