# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(name: 'Ben', email: 'bfrisb@gmail.com')
u2 = User.create(name: 'Laura', email: 'Laura@gmail.com')
u3 = User.create(name: 'Mathilda', email: 'Mathilda@gmail.com')

u1.friendships.create(friend_id: u2.id)
u1.friendships.create(friend_id: u3.id)

u3.friendships.create(friend_id: u1.id)