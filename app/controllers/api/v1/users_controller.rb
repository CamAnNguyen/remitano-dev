# frozen_string_literal: true

module Api
  module V1
    # User controller/API
    class UsersController < HomeController
      def destroy
        return head(:unauthorized) if current_user.nil?

        User.destroy(params[:id])
      end

      def update
        return head(:unauthorized) if current_user.nil?

        user = User.find(params[:id])
        user.update_attributes(params)
        render json: user
      end

      def movie_ratings
        return head(:unauthorized) if current_user.nil?

        render(status: :ok, json: current_user.movie_ratings.to_json)
      end

      private

      def user_params
        params.require(:user).permit(:id, :name, :email, :encrypted_password)
      end
    end
  end
end
