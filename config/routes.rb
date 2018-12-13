Rails.application.routes.draw do

  root "static_pages#root"
  # This redirects the localhost:3000 to the 'root' page

  namespace :api, defaults: {format: :json} do
  # HTTP response format: render JSON formatted responses by default
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
