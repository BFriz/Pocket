class Article < ActiveRecord::Base
  has_many :user_articles, dependent: :destroy
  has_many :users, through: :user_articles
  has_many :comments
end
