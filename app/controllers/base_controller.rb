# frozen_string_literal: true

# Main React App controller
class BaseController < ApplicationController
  respond_to :json

  before_action :authenticate_user!

  def authenticate!
    error!('401 Unauthorized', 401) unless current_user
  end
end
