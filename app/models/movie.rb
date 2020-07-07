# frozen_string_literal: true

# Model for Movie table
class Movie < ApplicationRecord
  validates_presence_of :title, :created_at, :updated_at

  belongs_to :creator, foreign_key: :shared_by, class_name: 'User'
  validates_presence_of :creator

  has_many :movie_ratings
end
