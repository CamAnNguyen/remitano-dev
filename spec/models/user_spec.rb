require 'rails_helper'

RSpec.describe User, :type => :model do
  subject {
    described_class.new(
      name: "Anonymous",
      email: "test@remitano.com",
      password: "@remitano.com",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a email" do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a password" do
    subject.password = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a created_at" do
    subject.created_at = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a updated_at" do
    subject.updated_at = nil
    expect(subject).to_not be_valid
  end
end
