# frozen_string_literal: true

FactoryBot.define do
  factory :movie do
    sequence(:title) { |i| "Title #{i}" }
    creator { build(:user) }
  end
end
