# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/auth', skip: [:omniauth_callbacks]

  # For details on the DSL available within this file
  # see https://guides.rubyonrails.org/routing.html

  root 'home#index'

  namespace :api do
    namespace :v1 do
      # mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]

      get '/users/ratings', to: 'users#movie_ratings'
      resources :users

      get '/identities/:email', to: 'identities#check',
                                constraints: { email: %r{[^\/]+} }

      get '/movies/ratings', to: 'movies#list_with_ratings'
      resources :movies
    end
  end
end
