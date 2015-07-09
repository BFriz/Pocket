%w[http://qz.com/448251/new-york-stock-exchange-halts-trading/ http://www.nytimes.com/2015/07/10/us/confederate-flag-south-carolina.html?hp&action=click&pgtype=Homepage&module=first-column-region&region=top-news&WT.nav=top-news http://qz.com/428276/the-state-of-the-healthcare-supply-chain-in-three-charts/ http://qz.com/448518/what-should-one-do-in-their-20s-to-avoid-regrets-in-their-30s-and-40s/ http://qz.com/445995/its-true-parents-really-are-biased-toward-firstborns/ http://qz.com/445344/is-turmoil-from-chinas-stock-market-downturn-headed-your-way/ http://qz.com/413792/instead-of-following-your-passion-find-a-career-that-changes-peoples-lives/ http://qz.com/428276/the-state-of-the-healthcare-supply-chain-in-three-charts/].each do |link|
  resp = HTTParty.get(link)

  doc = Nokogiri::HTML(resp.body)
  puts doc.at('meta[property="og:title"]')['content']
end

# article = OpenGraph.fetch('http://qz.com/441583/lyme-disease-is-spreading-faster-than-ever-and-humans-are-partly-to-blame/')

# puts 'article'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.delete_all
# Article.delete_all
# Comment.delete_all

# u1 = User.create(name: 'Ben', email: 'bfrisb@gmail.com')
# u2 = User.create(name: 'Laura', email: 'Laura@gmail.com')
# u3 = User.create(name: 'Mathilda', email: 'Mathilda@gmail.com')

# Article.create({title: 'The New York Stock Exchange has halted trading, blaming a "technical issue"', author: 'Quartz', category: 'Stock Exchange', url: "http://qz.com/448251/new-york-stock-exchange-halts-trading/"})
# Article.create({title: 'The rise and fall of Nokia, in one chart', author: 'Quartz', category: 'Blue Chip', url: "http://qz.com/430888/the-rise-and-fall-of-nokia-in-one-chart/"}) 
# Article.create({title: 'Barclays dumped its boss for not cutting costs far or fast enough', author: 'Quartz', category: 'Banking', url: "http://qz.com/447866/barclays-dumped-its-boss-for-not-cutting-costs-far-or-fast-enough/"}) 
puts "#{Article.all.count} articles seeded!"""

# a1 = Article.create(title: 'Adventures of a teenage girl', author: 'Dr. B Frisby', category: 'Motivational')
# a2 = Article.create(title: 'Confessions of a Merkaat', author: 'Ce Moorebuts', category: 'Hip')
# a3 = Article.create(title: 'The Diary of the Jamican Ski Team', author: 'Dick Hertz', category: 'Uplifting')

# c1 = Comment.create(author: 'Frank the Tank', content: ' This is really nice to figure out the associations')
# c2 = Comment.create(author: 'Hey Zues', content: 'Stupid idea made by stupid people.')
# c3 = Comment.create(author: 'Huego Bupkiss', content: 'I like the sound of my own voice.')



# u1.friendships.create(friend: u2)
# u1.friendships.create(friend_id: u2.id)
# u1.friendships.create(friend_id: u3.id)
# u3.friendships.create(friend_id: u1.id)

# u1.user_articles.create(article_id: a1.id)
# u1.user_articles.create(article_id: a2.id)
# u1.user_articles.create(article_id: a3.id)
# u2.user_articles.create(article_id: a1.id)
# u2.user_articles.create(article_id: a3.id)
# u3.user_articles.create(article_id: a2.id)
