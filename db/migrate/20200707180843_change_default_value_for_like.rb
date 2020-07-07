class ChangeDefaultValueForLike < ActiveRecord::Migration[6.0]
  def change
    change_column_default(:movie_ratings, :like, true)
  end
end
