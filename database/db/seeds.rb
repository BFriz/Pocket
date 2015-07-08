# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Article.delete_all

u1 = User.create(name: 'Ben', email: 'bfrisb@gmail.com')
u2 = User.create(name: 'Laura', email: 'Laura@gmail.com')
u3 = User.create(name: 'Mathilda', email: 'Mathilda@gmail.com')

a1 = Article.create(title: 'Adventures of a teenage girl', author: 'Dr. B Frisby', category: 'Motivational')
a2 = Article.create(title: 'Confessions of a Merkaat', author: 'Ce Moorebuts', category: 'Hip')
a3 = Article.create(title: 'The Diary of the Jamican Ski Team', author: 'Dick Hertz', category: 'Uplifting')

c1 = Comment.create(author: 'Frank the Tank', content: ' This is really nice to figure out the associations')
c2 = Comment.create(author: 'Hey Zues', content: 'Stupid idea made by stupid people.')
c3 = Comment.create(author: 'Huego Bupkiss', content: 'I like the sound of my own voice.')



# u1.friendships.create(friend: u2)
u1.friendships.create(friend_id: u2.id)
u1.friendships.create(friend_id: u3.id)
u3.friendships.create(friend_id: u1.id)

u1.user_articles.create(article_id: a1.id)
u1.user_articles.create(article_id: a2.id)
u1.user_articles.create(article_id: a3.id)
u2.user_articles.create(article_id: a1.id)
u2.user_articles.create(article_id: a3.id)
u3.user_articles.create(article_id: a2.id)
