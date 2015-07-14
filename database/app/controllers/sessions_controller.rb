class SessionController < Devise::SessionsController
  skip_before_filter :require_no_authentication, only: [:create]
  def create
    # Allow users to reach this route even if they are not authenticated
    user = User.find_for_database_authentication(email: params[:email])

    if user && user.valid_password?(params[:password])
      sign_in user
      render json: {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        authentication_token:user.authentication_token
      }, status: 201
    else
      render json: {
        errors: ["Invalid email or password"]
      }, status: 422
    end
  end
end
 



 # def create
  #   user = User.where(:username => params[:username]).first
  #   if user.present? && user.authenticate(params[:password])
  #     session[:user_id] = user.id

  #     render :json => {:success => true, :message => "SUCCESS: logged in as #{user.username}", 
  #                      :username => user.username}
  #   else
  #     session[:user_id] = nil

  #     render :json => {:success => false, :message => 'ERROR: Incorrect username or password, please try again.'}
  #   end
  # end

  # def destroy
  #   session[:user_id] = nil

  #   render :json => {:success => true, :message => 'SUCCESS: logged out'}
  # end