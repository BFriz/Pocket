class Category < ActiveRecord::Base
  has_many :article_categories, dependent: :destroy
  has_many :users, through: :user_articles
end
