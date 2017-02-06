Rails.application.routes.draw do
  devise_for :users
  root 'angular#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do 
    scope :v1 do 
      resources :boards, except: [:new, :edit]
      resources :lists, only: [:show, :create, :update]
      resources :cards, only: [:show, :create, :update]
    end
  end
end
