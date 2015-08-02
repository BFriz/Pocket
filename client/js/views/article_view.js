PocketApp.Views.ArticleView = Backbone.View.extend({
  tagName: 'div',
  className: 'box20 box articlething',
  events: {
    "click button.remove": 'removeArticle',
    'click button.edit': 'editArticle',
    'click button.save': 'saveArticle'
  },
  initialize: function(){
    this.articleTemplate = _.template($('#tpl_article').html());
  },
  render: function(){
    this.$el.html(this.articleTemplate(this.model.toJSON()));
    return this;
  },
  removeArticle: function(){

    this.model.destroy();
  }
}); 

