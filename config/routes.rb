Rails.application.routes.draw do
  get "/*id" => 'pages#show', format: false
  root to: 'pages#show', id: 'home'
end
