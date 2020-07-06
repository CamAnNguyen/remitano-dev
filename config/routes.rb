# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/auth'

  # For details on the DSL available within this file
  # see https://guides.rubyonrails.org/routing.html

  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create destroy update]
    end
  end
end
