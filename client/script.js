// // creating articles
// a1 = new Article.Content({title: 'The New York Stock Exchange has halted trading, blaming a "technical issue"', author: 'Quartz', category: 'Stock Exchange', url: "http://qz.com/448251/new-york-stock-exchange-halts-trading/"})
// a2 = new Article.Content({title: 'The rise and fall of Nokia, in one chart', author: 'Quartz', category: 'Blue Chip', url: "http://qz.com/430888/the-rise-and-fall-of-nokia-in-one-chart/"}) 
// a3 = new Article.Content({title: 'Barclays dumped its boss for not cutting costs far or fast enough', author: 'Quartz', category: 'Banking', url: "http://qz.com/447866/barclays-dumped-its-boss-for-not-cutting-costs-far-or-fast-enough/"}) 
// PocketApp.Collections.ArticleList = new PocketApp.Collections.ArticleList([]);




var PocketApp = PocketApp || {
  Models: {},
  Collections: {},
  Views: {}
}

$(document).ready(function(){
  PocketApp.articles = new PocketApp.Collections.ArticleList();
  $.when(
    PocketApp.articles.fetch()
    ).then(function() {
      PocketApp.router = new PocketApp.AppRouter();
      PocketApp.Views.appview = new PocketApp.Views.appView();
      PocketApp.Views.appview.render();

      Backbone.history.start();
    })
});





