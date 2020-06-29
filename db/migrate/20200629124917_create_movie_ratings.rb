class CreateMovieRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_ratings do |t|
      t.integer :movie_id
      t.integer :user_id
      t.boolean :like

      t.timestamps
    end
  end
end
