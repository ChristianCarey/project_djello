class List < ApplicationRecord
  belongs_to :user
  belongs_to :board
  has_many :cards, dependent: :destroy

  def reposition(updated_card)
    cards.each do |card|
      if card.id == updated_card.id
        card.position = updated_card.new_position
      elsif card.position >= updated_card.new_position
        card.position += 1
      end
      card.new_position = nil
      card.save
    end
  end  
end
