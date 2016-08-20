Rails.application.routes.draw do

  resources :microposts
  resources :groups
  devise_for :users
  resources :users
  get 'users/:id' => 'users#show'
  resources :welcome
  root 'welcome#index'


  namespace :api do
    namespace :v1 do
      resources :microposts, only: [:index, :create, :destroy, :update]
    end
  end

  #   get 'products/:id' => 'catalog#view'

  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

end
