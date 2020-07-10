# frozen_string_literal: true

module Api
  module V1
    # Identities controller/API
    class IdentitiesController < HomeController
      def check
        exists = User.exists?(email: params[:email])
        status = exists ? :ok : :not_found
        render status: status, body: nil
      end
    end
  end
end
