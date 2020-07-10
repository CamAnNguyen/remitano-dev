# frozen_string_literal: true

# Model for User table
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  # before_save -> { skip_confirmation! }

  acts_as_paranoid

  validates_presence_of :email, :encrypted_password

  has_many :movie_ratings
  has_many :movies
end
