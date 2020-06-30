require 'rails_helper'

RSpec.describe MovieRating, :type => :model do
  let(:user) {
    User.new(id: 1, email: "john@doe.com", password: "pw1234")
  }

  let(:movie) {
    Movie.new(
      id: 1,
      title: "John Wick",
      user: user,
      shared_by: 1,
      description: "You're Breathtaking"
    )
  }

  subject {
    described_class.new(
      movie: movie,
      user: user,
      movie_id: 1,
      user_id: 1,
      like: true,
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is valid without a like" do
    subject.like = nil
    expect(subject).to be_valid
  end

  describe "Associations" do
    it { should belong_to(:user) }
    it { should belong_to(:movie) }
  end

  describe "Validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:movie) }
  end
end
