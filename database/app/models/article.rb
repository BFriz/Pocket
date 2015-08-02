class Article < ActiveRecord::Base
  has_many :user_articles, dependent: :destroy
  has_many :users, through: :user_articles
  has_many :comments
  has_many :article_categories, dependent: :destroy
  has_many :categories, through: :article_categories

  after_create :clean_data

  def clean_data
    Article.where(title: nil).delete_all
  end

  def scrapedata
    theUrl = self.url
    resp = HTTParty.get(theUrl)
    doc = Nokogiri::HTML(resp.body)
# This is why the function is being called 3 times ??????
      title = doc.at('meta[property="og:title"]')['content']
      description = doc.at('meta[property="og:description"]')['content']
      image = doc.at('meta[property="og:image"]')['content']
      # site_name = doc.at('meta[property="og:site_name"]')['content']

      Article.create(title: title, description: description, image: image, url: url)
      # binding.pry
    # self.title = title
    # self.description = description
    # self.image = image
    # self.site_name = site_name
    # self.save

  end
end


