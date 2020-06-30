class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  protect_from_forgery with: :null_session

  before_action :authenticate_user!

  def current_user
    @current_user ||= API::WardenAuthentication.new(env).current_user
  end

  def authenticate!
    error!('401 Unauthorized', 401) unless current_user
  end
end
