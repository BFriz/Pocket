class User < ActiveRecord::Base

  # attr_accessible :username, :email, :password, :password_confirmation

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         before_save :ensure_authentication_token

  has_many :friendships
  has_many :friends, :through => :friendships
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  has_many :user_articles, dependent: :destroy
  has_many :articles, through: :user_articles 

  validates :username, :presence => true
  validates :email, :presence => true

  validates :username, :length => { :minimum => 6, :maximum => 20 }
  validates :username, format: { with: /\A[A-z0-9_]+\z/, message: "only allows letters, numbers and underscores" }

  validates :password, :length => { :minimum => 6 }
  validates :password, format: { with: /\A\S+\z/, message: "cannot include whitespace characters"}

  #use bcrypt to convert password to a password digest
  has_secure_password


  
end
