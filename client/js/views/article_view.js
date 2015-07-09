PocketApp.Views.ArticleView = Backbone.View.extend({
  tagName: 'div',
  events: {
    "click button.remove": 'removeArticle',
    'click button.edit': 'editArticle',
    'click button.save': 'saveArticle'
  },
  initialize: function(){
    this.template = _.template($('#tpl-article'.html()));
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  removeArticle: function(){
    this.model.destroy();
  },
  editArticle: function(){
    this.$('h3').each(function(){
      $(this).replaceWith($('<input class="' + $(this).attr('class') + '" value="' + $(this).text() + '" />'));
    });
    this.$('button.edit').text('Save').addClass('save').removeClass('edit');
  },
  saveArticle: function(){
    this.model.set({
      task: this.$('input.task').val()
    })
  }
}); 