source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'
gem 'devise'
gem 'faker'
gem 'bootstrap-sass', '~> 3.3', '>= 3.3.7'


source 'https://rails-assets.org' do
  gem 'rails-assets-bootstrap'
  gem 'rails-assets-angular'
  gem 'rails-assets-ui-router'
  gem 'rails-assets-lodash'
  gem 'rails-assets-restangular'
  gem 'rails-assets-angular-devise'
end

group :development, :test do
 
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'guard-rspec'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'jazz_fingers'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
