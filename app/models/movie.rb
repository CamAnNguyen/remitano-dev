# frozen_string_literal: true

# Model for Movie table
class Movie < ApplicationRecord
  acts_as_paranoid

  validates_presence_of :title

  belongs_to :creator, foreign_key: :shared_by, class_name: 'User'
  validates_presence_of :creator

  has_many :movie_ratings

  before_save :youtube_info_from_url

  private

  def youtube_info_from_url
    id = youtube_url.scan(/v=(.*)/).first
    return if id.nil?

    self.youtube_id = id.first
    self.youtube_preview = 'https://img.youtube.com/vi/' +
                           youtube_id + '/hqdefault.jpg'
  end
end
