// <script type="text/javascript">
//   var SearchView = Backbone.View.extend({
//     initialize: function(){
//       this.render();
//     },
//     render: function(){
//       //Pass variables in using Underscore.js Template
//       var variables = { search_label: "My Search" };
//       // Compile the template using underscore
//       var template = _.template( $("#search_template").html(), variables );
//       // Load the compiled HTML into the Backbone "el"
//       this.$el.html( template );
//     },
//     events: {
//       "click input[type=button]": "doSearch"  
//     },
//     doSearch: function( event ){
//       debugger;
//       // Button clicked, you can access the element that was clicked with event.currentTarget
//       alert( "Search for " + $("#search_input").val() );
//     }
//   });
// </script>