class AddPositionToBoards < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :position, :integer
  end
end
