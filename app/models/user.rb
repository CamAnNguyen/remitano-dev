# frozen_string_literal: true

# Model for User table
class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable, :validatable
  before_save -> { skip_confirmation! }

  validates_presence_of :email, :encrypted_password, :created_at, :updated_at

  has_many :movie_ratings
  has_many :movies
end
