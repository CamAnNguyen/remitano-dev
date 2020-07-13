# frozen_string_literal: true

# MovieRating class, contains rating information from users to movies
class MovieRating < ApplicationRecord
  acts_as_paranoid

  belongs_to :user
  belongs_to :movie

  validates_presence_of :movie, :user
  validates_inclusion_of :like, in: [true, false]
end
