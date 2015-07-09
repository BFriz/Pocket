class ContactsController < ApplicationController
  def index
    articles = Articles.all.order(:id)

    render json:articles
  end
end