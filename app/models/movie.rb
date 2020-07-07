# frozen_string_literal: true

# Model for Movie table
class Movie < ApplicationRecord
  acts_as_paranoid

  validates_presence_of :title

  belongs_to :creator, foreign_key: :shared_by, class_name: 'User'
  validates_presence_of :creator

  has_many :movie_ratings
end
