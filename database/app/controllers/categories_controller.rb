class CategoriesController < ApplicationController
  def index
    categories = Category.where("%#{params[:name]}%")

    render json:categories
  end
  def create
    categories = Category.create(name: params[:name])

    render json:categories if categories.save
  end
end