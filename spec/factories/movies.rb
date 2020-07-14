# frozen_string_literal: true

require_relative '../support/movie_spec_helper.rb'
include MovieSpecHelper

FactoryBot.define do
  factory :movie do
    sequence(:title) { |i| "Title #{i}" }
    creator { build(:user) }
    youtube_url do
      "https://www.youtube.com/watch?v=#{generate_code(11)}"
    end
  end
end
