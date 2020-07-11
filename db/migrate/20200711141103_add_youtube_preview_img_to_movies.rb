class AddYoutubePreviewImgToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :youtube_preview, :string
  end
end
