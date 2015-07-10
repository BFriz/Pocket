class CategoriesController < ApplicationController
  def index
    category = Category.all.order(:id)

    render json:category
  end
  def create
    category = Category.create(name: params[:name])

    render json: category if category.save
  end