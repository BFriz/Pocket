PocketApp.Views.ArticleListView = Backbone.View.extend({
  tagName: 'div',
  events: {
    "click button.remove": 'removeArticle',
    'click button.edit': 'editArticle',
    'click button.save': 'saveArticle'
  },
  initialize: function(){
    this.template = _.template($('#tpl-article').html());
    this.collection.bind('add remove change', this.render, this);
    this.collection.fetch({
      success: function(collection, response, options) {
        console.log('woo')
      },
      error: function(collection, response, options) {
        console.log('error')
      }
    })
  },
  render: function(){
    console.log('article list view render')
    // this.$el.html(this.template(this.model.toJSON()));
    // return this;
  }
  // },
  // removeArticle: function(){
  //   this.model.destroy();
  // },
  // editArticle: function(){
  //   this.$('h3').each(function(){
  //     $(this).replaceWith($('<input class="' + $(this).attr('class') + '" value="' + $(this).text() + '" />'));
  //   });
  //   this.$('button.edit').text('Save').addClass('save').removeClass('edit');
  // },
  // saveArticle: function(){
  //   this.model.set({
  //     task: this.$('input.task').val()
  //   })
  // }
}); 