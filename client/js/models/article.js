PocketApp.Models.Article = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/articles',
  defaults: {
    title: '',
    author: '',
    url: '',
    description: '',
    image: '',
    site_name: ''
  }
})