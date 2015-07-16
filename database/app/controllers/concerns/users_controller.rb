class UsersController < ApplicationController
  def index
    @users = User.all 
  end

  def show
    @user = current_user
  end

  def new
    @user = User.new
  end

  def create
    binding.pry
    # @user = User.new(params[:user])
    # if @user.save
    #   session[:user_id] = @user.user_id
    #   flash[:notice] = "Thank you for signing up! You are now logged in."
    #   redirect_to root_url
    else
      render :action => 'new'
    end
  end
end