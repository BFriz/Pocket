class ArticleCategory < ActiveRecord::Base
  belongs_to :article
  belongs_to :category

  # accepts_nested_attributes_for :article, :category, allow_destroy: true
end
