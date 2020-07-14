# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Movie API', type: :request do
  let!(:current_user) { FactoryBot.create(:user) }

  let!(:movie1) { FactoryBot.create(:movie, creator: current_user) }

  let(:create_params) do
    { youtubeURL: "https://www.youtube.com/watch?v=#{generate_code(11)}" }
  end

  context 'with guest user' do
    it 'gives you a list of shared movies with emails and ratings' do
      get('/api/v1/movies/ratings')
      expect(JSON.parse(response.body).size).to eq 1
    end

    it 'gives you a unauthorized status if you are trying to create/share a movie' do
      post('/api/v1/movies', params: create_params, as: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it 'gives you a unauthorized status if you are trying to update a movie' do
      put("/api/v1/movies/#{movie1.id}", params: { title: 'Movie title' })
      expect(response).to have_http_status(:unauthorized)
    end
  end

  context 'with logged-in user' do
    sign_in(:current_user)

    it 'gives you a list of shared movies with emails and ratings' do
      get('/api/v1/movies/ratings')
      expect(JSON.parse(response.body).size).to eq 1
    end

    it 'gives you a ok status if you are trying to create/share a movie' do
      post('/api/v1/movies', params: create_params, as: :json)
      expect(response).to have_http_status(:created)
    end
  end
end
