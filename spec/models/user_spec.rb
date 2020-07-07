# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with valid attributes' do
    expect(FactoryBot.build(:user)).to be_valid
  end

  it 'is not valid with a null email' do
    expect(FactoryBot.build(:user, email: nil)).not_to be_valid
  end

  it 'is not valid with an empty email' do
    expect(FactoryBot.build(:user, email: '')).not_to be_valid
  end

  it 'is not valid without a password' do
    expect(FactoryBot.build(:user, password: nil)).not_to be_valid
  end

  it 'is not valid with an empty password' do
    expect(FactoryBot.build(:user, password: '')).not_to be_valid
  end
end
