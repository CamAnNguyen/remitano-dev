# frozen_string_literal: true

# Main application controller
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session,
                       only: proc { |c| c.request.format.json? }
  include DeviseTokenAuth::Concerns::SetUserByToken
end
