class ArticlesController < ApplicationController
  def index
    articles = Article.all.order(:id)

    # render json: articles
    render :json => articles, :include => :categories
  end
  def create
    # binding.pry
    article = Article.create(url: params[:url])
    params[:categories].split(', ').each do |name|
      category = Category.create(name: name)
      ArticleCategory.create(category_id: category.id, article_id: article.id)
    end
    article.scrapedata
    
    render :json => article, :include => :categories
    # render :json => articles, :include => :categories
  end
  def destroy
    article = Article.find(params[:id]).destroy
  end

  # def update
  #   article = Article.find(params[:id])

  #   render json: article if article.update_update_attributes(title: params[:title], category: params[:category)])
  # end
end