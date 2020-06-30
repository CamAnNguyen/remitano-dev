class Movie < ApplicationRecord
  validates_presence_of :title, :shared_by, :created_at, :updated_at

  belongs_to :creator, foreign_key: :created_by, class_name: 'User'
  validates_presence_of :creator

  has_many :movie_ratings
end
