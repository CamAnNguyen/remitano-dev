# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "foobar#{n}@bar.de" }
    name { 'name' }
    password { 'test_password' }
    created_at { DateTime.now }
    updated_at { DateTime.now }
  end
end
