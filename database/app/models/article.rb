class Article < ActiveRecord::Base
  has_many :user_articles, dependent: :destroy
  has_many :users, through: :user_articles
  has_many :comments
  has_many :article_categories, dependent: :destroy
  has_many :categories, through: :article_categories

  def scrapedata

    theUrl = self.url
    resp = HTTParty.get(theUrl)
    doc = Nokogiri::HTML(resp.body)
    title = doc.at('meta[property="og:title"]')['content']
    description = doc.at('meta[property="og:description"]')['content']
    # image = doc.at('meta[property="og:image"]')['content']
    # author = doc.at('meta[property="og:site_name"]')['content']
        self.title = title
        self.description = description
        # self.image = image
          self.save

  end

end
