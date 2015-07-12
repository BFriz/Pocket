// // creating articles
// a1 = new Article.Content({title: 'The New York Stock Exchange has halted trading, blaming a "technical issue"', author: 'Quartz', category: 'Stock Exchange', url: "http://qz.com/448251/new-york-stock-exchange-halts-trading/"})
// a2 = new Article.Content({title: 'The rise and fall of Nokia, in one chart', author: 'Quartz', category: 'Blue Chip', url: "http://qz.com/430888/the-rise-and-fall-of-nokia-in-one-chart/"}) 
// a3 = new Article.Content({title: 'Barclays dumped its boss for not cutting costs far or fast enough', author: 'Quartz', category: 'Banking', url: "http://qz.com/447866/barclays-dumped-its-boss-for-not-cutting-costs-far-or-fast-enough/"}) 


var PocketApp = PocketApp || {
  Models: {},
  Collections: {},
  Views: {}
}

$(document).ready(function(){
  PocketApp.articles = new PocketApp.Collections.ArticleList([]);
  var router = new PocketApp.AppRouter();
  //comes here from Router PocketApp.AppRouter is = Backbone.Router.extend({
    // 2    routes: { from the router.js file. then heads back to the article_list+view to render articles on the page. 
  Backbone.history.start();
});





