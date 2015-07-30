PocketApp.Views.ArticleListView = Backbone.View.extend({
  el: '#article',
  events: {
    // "click button.remove": 'removeArticle',
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
  // }
  },
  render: function(){
    // debugger;
    // // console.log('article list view render')
    var articleList = $('#articleList')
    // articleList.empty();
    // // collection of all the articles from the article view
    this.collection.each(function(article){
      var articleView = new PocketApp.Views.ArticleView({model: article})
      articleList.prepend(articleView.render().el);
      // debugger;
    //   //Pass variables in using Underscore.js Template
    //   var variables = { searchch_label: "My Search" };
    });
    //After the above code heads of to the router APP
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
        accountList.prepend('<div class="mcc-account">'+curr_acc+'</div>')
      }       
    });
    // If there are no matches append a notification
    $('.mcc-account').length === 0 ? accountList.append('<li>--No accounts found--</li>') : false;
  },
  sortBy: function() {
    debugger;
    this.collection.models
  // }

    }


 
}); 