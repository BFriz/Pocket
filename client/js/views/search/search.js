PocketApp.Views.Search = Backbone.View.extend({
  events:{
    'keyup .search-query' : 'search'
  },
 initialize: function(){
    // Compile the template and attach it to the shellView
    this.template = _.template($('#shell-template').html());
    // // Adding a collection of articles with categories to the shell-list view
    // //We need to tye this in so that we have it for the search function (drop down)
    // this.searchResults = new directory.Collection();
    // //Has the collection (this.searchResults in below)
    // this.searchResultsView = new directory.ListView({collection: this.searchResults, className: 'dropdown-menu'})
    // $('body').click(function(){
    //   $('.dropdown').removeClass('open');
    // });
  },
  render: function(){
    //tagName will be a default dev, reaplce the html of the div with the compiled template
    this.$el.html(this.template());

    $('.navbar-search', this.el).append(this.searchResultsView.render().el);
    return this;
  },
  search: function(){
    debugger;
    var searchData = $('#searchText').val();
    // Make an ajax request to the server
    this.searchResults.fetch({
      reset: true,
      data: {name: searchData},
      success: function(data){
        console.log(data);
        $('.dropdown').addClass('open');
      }
    })

  }
})