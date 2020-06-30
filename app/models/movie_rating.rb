class MovieRating < ApplicationRecord
  validates_presence_of :created_at, :updated_at

  belongs_to :user
  belongs_to :movie

  validates_presence_of :movie
  validates_presence_of :user
end
