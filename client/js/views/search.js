var SearchView = Backbone.View.extend({
  events: {
    "keyup .search-query" : "search"
  },
  // initialize: function(){
  //   this.render();
  // },
  render: function(){
    //Pass variables in using Underscore.js Template
    this.$el.html(this.template());

    $('.navbar-search', this.el).append(this.searchResultsView.render().el);
    return this;
  },
  search: function(){
    debugger
    var searchData = $('#searchText').val();
  // Make an ajax request to the server
    this.searchResults.fetch({
      reset: true,
      data: {name: searchData},
        success: function(data){
         $('.dropdown').addClass('open');

        }
    })
  } 
});
