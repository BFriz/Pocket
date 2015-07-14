class User < ActiveRecord::Base

  # attr_accessible :username, :email, :password, :password_confirmation

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save :ensure_authentication_token

  def generate_authentication_token
    loop do 
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end
  
  has_many :friendships
  has_many :friends, :through => :friendships
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  has_many :user_articles, dependent: :destroy
  has_many :articles, through: :user_articles 

  validates :email, :presence => true

  validates :email, :length => { :minimum => 6, :maximum => 20 }
  validates :email, format: { with: /\A[A-z0-9_]+\z/, message: "only allows letters, numbers and underscores" }

  validates :password, :length => { :minimum => 8 }
  validates :password, format: { with: /\A\S+\z/, message: "cannot include whitespace characters"}

  #use bcrypt to convert password to a password digest


  
end
