class AddDeletedAtToModels < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :deleted_at, :datetime
    add_column :movies, :deleted_at, :datetime
    add_column :movie_ratings, :deleted_at, :datetime
  end
end
