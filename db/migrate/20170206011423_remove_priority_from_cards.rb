class RemovePriorityFromCards < ActiveRecord::Migration[5.0]
  def change
    remove_column :cards, :priority
  end
end
