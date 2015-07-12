SearchResults = Backbone.Collection.extend({
  url: function(){
    return "/items/" + this.searchTerm;
  }
}, {
  search: function(searchTerm();
    results.searchTerm = "some search term";
    results.fetch({
      success: function(){
        myApp.vent.trigger("search:results", results);
      },
      error: function(collection, response){
        MyApp.vent.trigger("search:error", reponse);
      }
    }))
}
});