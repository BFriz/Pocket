// creating articles
a1 = new Article.Content({title: 'The New York Stock Exchange has halted trading, blaming a "technical issue"', author: 'Quartz', category: 'Stock Exchange', url: "http://qz.com/448251/new-york-stock-exchange-halts-trading/"})
a2 = new Article.Content({title: 'The rise and fall of Nokia, in one chart', author: 'Quartz', category: 'Blue Chip', url: "http://qz.com/430888/the-rise-and-fall-of-nokia-in-one-chart/"}) 
a3 = new Article.Content({title: 'Barclays dumped its boss for not cutting costs far or fast enough', author: 'Quartz', category: 'Banking', url: "http://qz.com/447866/barclays-dumped-its-boss-for-not-cutting-costs-far-or-fast-enough/"}) 


Article.Content = new Article.Article_List([a1, a2, a3]);

$(document).ready(function(){
  var router = new Article.AppRouter();
  Backbone.history.start();
  });