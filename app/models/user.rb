class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :memberships, dependent: :destroy
  
  has_many :boards, through: :memberships, 
                    source: :joinable, 
                    source_type: 'Board'

  has_many :cards, through: :memberships, 
                   source: :joinable, 
                   source_type: 'Card'

  has_many :owned_boards, class_name: 'Board', 
                          dependent: :nullify
end
