class MovieRating < ApplicationRecord
  validates_presence_of :created_at, :updated_at

  belongs_to :creator, foreign_key: :created_by, class_name: 'User'
  belongs_to :movie

  validates_presence_of :movie
  validates_presence_of :creator
end
