class CategoriesController < ApplicationController
  def index
    categories = Category.all.order(:id)

    render json:categories
  end
  def create
    category = Category.create(name: params[:name])

    render json: category if category.save
  end
end