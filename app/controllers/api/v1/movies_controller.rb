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

      def list_with_ratings
        select_string = <<-SQL.strip_heredoc
          movies.id, movies.title, movies.description,
          movies.youtube_url, movies.youtube_id, movies.youtube_preview,
          users.email as email,
          SUM(CASE WHEN movie_ratings.like IS TRUE THEN 1 ELSE 0 END) as vote_up,
          SUM(CASE WHEN movie_ratings.like IS FALSE THEN 1 ELSE 0 END) as vote_down
        SQL

        list = Movie.left_outer_joins(:movie_ratings).joins(:creator)
                    .select(select_string).group('movies.id, users.email')
                    .group('movies.id, users.email')

        render(status: :ok, json: list.to_json)
      end
    end
  end
end
