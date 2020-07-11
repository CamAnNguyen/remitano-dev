class ChangeMovieIndex < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :youtube_id, :string

    remove_index :movies, :title
    add_index :movies, :youtube_id
  end
end
