# frozen_string_literal: true

module Api
  module V1
    # User controller/API
    class MovieRatingsController < HomeController
      def destroy
        MovieRating.destroy(params[:id])
      end
    end
  end
end
