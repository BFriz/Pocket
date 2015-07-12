// hand the search results in a view
Backbone.View.extend({
  initialize: function(){
    MyApp.vent.bind("search:results", this.showResults, this);
  },
  showResults: function(results){
    this.collection = results;
    this.render();
  },
  render: function(){
    var html = $("#some-template").tmpl(this.collection.toJSON());
    $(this.el).html(html);
  }
})

SearchResults.search("some search term");