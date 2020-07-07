# frozen_string_literal: true

FactoryBot.define do
  factory :movie_rating do
    like { true }
    created_at { DateTime.now }
    updated_at { DateTime.now }
    user { build(:user) }
    movie { build(:movie) }
  end
end
