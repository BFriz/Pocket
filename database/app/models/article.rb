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
    image = doc.at('meta[property="twitter:image"]')['content']
    # author = doc.at('meta[property="og:site_name"]')['content']
    self.title = title
    self.description = description
    self.image = image
    self.save

  end
# <meta property="og:url" name="og:url" content="http://www.vice.com/en_uk/read/lambeth-drugs-laughing-gas-crackdown-police-208">
end


# <meta property="article:published" itemprop="datePublished" content="2015-07-15">