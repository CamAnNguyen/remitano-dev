# frozen_string_literal: true

# Model for Movie table
class Movie < ApplicationRecord
  validates_presence_of :title, :shared_by, :created_at, :updated_at

  belongs_to :user, foreign_key: :shared_by, class_name: 'User'
  validates_presence_of :user

  has_many :movie_ratings
end
