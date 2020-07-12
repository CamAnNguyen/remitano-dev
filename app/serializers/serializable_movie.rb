# frozen_string_literal: true

# Serializer for Movie model
class SerializableMovie < JSONAPI::Serializable::Resource
  type 'movies'

  attributes :title, :description, :youtube_url, :youtube_id, :youtube_preview

  attribute :creator_email do
    @object.creator.email
  end
end
