class Card < ApplicationRecord
  belongs_to :user
  belongs_to :list
  after_save :reposition

  def reposition
    self.list.reposition(self) if new_position
  end
end
