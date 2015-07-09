class ArticlesController < ApplicationController
  def index
    articles = Article.all.order(:id)

    render json:articles
  end
end