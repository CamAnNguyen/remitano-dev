class AddYoutubeUrlToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :youtube_url, :string
  end
end
