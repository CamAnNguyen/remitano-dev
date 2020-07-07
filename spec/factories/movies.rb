# frozen_string_literal: true

FactoryBot.define do
  factory :movie do
    sequence(:title) { |i| "Title #{i}" }
    created_at { DateTime.now }
    updated_at { DateTime.now }
    creator { build(:user) }
  end
end
