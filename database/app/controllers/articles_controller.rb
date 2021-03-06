class ArticlesController < ApplicationController

  # skip_before_filter :require_no_authentication, only: [:create]
  # before_filter :authenticate_user!

  def index
    articles = Article.all.order(:id)

    render :json => articles, :include => :categories
  end
  def create
    # binding.pry
    user_id = params[:current_user]
    article = Article.create(url: params[:url]).scrapedata
    # article.scrapedata
    # binding.pry
    params[:categories].split(', ').each do |name|
      category = Category.create(name: name)
     # ArticleCategory.create(category_id: category.id, article_id: article.id)
    end
    # binding.pry
    UserArticle.create(user_id: user_id, article_id: Article.last.id)

    # render :json => article, :include => :current_user

# **************NEED TO FIGURE OUT WHAT TO RENDER *******************
# binding.pry
    render :json => article, :include => :categories
  end
  
  def destroy
    article = Article.find(params[:id]).destroy
  end

  def user_articles
    user = User.find(params[:user]) 
    if user

      render :json => user.articles, :include => :categories
    else
      render :json => {status: :failure}
    end
  end

  # def update
  #   article = Article.find(params[:id])

  #   render json: article if article.update_update_attributes(title: params[:title], category: params[:category)])
  # end
end