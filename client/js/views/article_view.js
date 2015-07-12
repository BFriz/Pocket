PocketApp.Views.ArticleView = Backbone.View.extend({
  tagName: 'div',
  className: 'pure-u-1-3',
  events: {
    "click button.remove": 'removeArticle',
    'click button.edit': 'editArticle',
    'click button.save': 'saveArticle'
  },
  initialize: function(){
    this.articleTemplate = _.template($('#tpl_article').html())  ;
  },
  render: function(){
    // debugger;

    this.$el.html(this.articleTemplate(this.model.toJSON()));
    return this;
  },
  removeArticle: function(){
    this.model.destroy();
  }
//   editArticle: function(){
//     this.$('h1, p').each(function(){
//       $(this).replaceWith($('<input class="' + $(this).attr('class') + '" value="' + $(this).text() + '" />'));
//     });
//     this.$('button.edit').text('Save').addClass('save').removeClass('edit');
//   },
//   saveArticle: function(){
//     this.model.set({
//       task: this.$('input.task').val()
//     })
//   }
}); 