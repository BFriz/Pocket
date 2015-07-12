class CategoriesController < ApplicationController
  def index
    binding.pry
    categories = Category.all.order(:id)

    render json:categories
  end
  def create
    categories = Category.create(name: params[:name])

    render json:categories if categories.save
  end
end