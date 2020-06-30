require 'rails_helper'

RSpec.describe Movie, :type => :model do
  let(:user) {
    User.new(id: 1, email: "john@doe.com", password: "pw1234")
  }

  subject {
    described_class.new(
      title: "John Wick",
      user: user,
      shared_by: 1,
      description: "You're Breathtaking",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a title" do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it "is valid without a description" do
    subject.description = nil
    expect(subject).to be_valid
  end

  it "is not valid without a created_at" do
    subject.created_at = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a updated_at" do
    subject.updated_at = nil
    expect(subject).to_not be_valid
  end

  describe "Associations" do
    it { should belong_to(:user) }
  end
end
