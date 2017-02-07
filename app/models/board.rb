class Board < ApplicationRecord
  include Joinable
  
  belongs_to :user
  has_many :lists, dependent: :destroy
end
