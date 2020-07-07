# frozen_string_literal: true

require 'rails_helper'

describe MovieRating, type: :model do
  it 'is valid with valid attributes' do
    expect(FactoryBot.build(:movie_rating)).to be_valid
  end

  it 'is valid without a like' do
    expect(FactoryBot.build(:movie_rating, like: nil)).to be_valid
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:movie) }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:movie) }
  end
end
