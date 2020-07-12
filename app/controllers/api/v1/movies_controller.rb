# frozen_string_literal: true

module Api
  module V1
    # User controller/API
    class MoviesController < HomeController
      def create
        return head(:forbidden) if current_user.nil?

        movie = Movie.find_or_create_by(
          youtube_url: params[:youtubeURL],
          creator: current_user
        )

        render(status: :created, jsonapi: movie)
      end

      def query_list
        render(
          jsonapi: Movie.all,
          include: [:creator]
        )
      end
    end
  end
end
