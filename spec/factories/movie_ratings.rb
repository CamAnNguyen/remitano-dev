# frozen_string_literal: true

FactoryBot.define do
  factory :movie_rating do
    like { true }
    user { build(:user) }
    movie { build(:movie) }
  end
end
