# frozen_string_literal: true

require 'rails_helper'

describe Movie, type: :model do
  it 'is valid with valid attributes' do
    expect(FactoryBot.build(:movie)).to be_valid
  end

  it 'is not valid a null title' do
    expect(FactoryBot.build(:movie, title: nil)).to be_valid
  end

  it 'is not valid an empty title' do
    expect(FactoryBot.build(:movie, title: '')).to be_valid
  end

  it 'is valid with a null description' do
    expect(FactoryBot.build(:movie, description: nil)).to be_valid
  end

  it 'is valid with an empty description' do
    expect(FactoryBot.build(:movie, description: '')).to be_valid
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:creator) }
  end
end
