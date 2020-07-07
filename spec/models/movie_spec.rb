# frozen_string_literal: true

require 'rails_helper'

describe Movie, type: :model do
  it 'is valid with valid attributes' do
    expect(FactoryBot.build(:movie)).to be_valid
  end

  it 'is not valid a null title' do
    expect(FactoryBot.build(:movie, title: nil)).not_to be_valid
  end

  it 'is not valid an empty title' do
    expect(FactoryBot.build(:movie, title: '')).not_to be_valid
  end

  it 'is valid with a null description' do
    expect(FactoryBot.build(:movie, description: nil)).to be_valid
  end

  it 'is valid with an empty description' do
    expect(FactoryBot.build(:movie, description: '')).to be_valid
  end

  it 'is not valid without a created_at' do
    expect(FactoryBot.build(:movie, created_at: nil)).not_to be_valid
  end

  it 'is not valid without a updated_at' do
    expect(FactoryBot.build(:movie, updated_at: nil)).not_to be_valid
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:creator) }
  end
end
