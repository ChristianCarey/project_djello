class AddNewPositionToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :new_position, :integer
  end
end
