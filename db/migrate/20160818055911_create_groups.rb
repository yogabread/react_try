class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :group_name
      t.integer :founder_id
      t.text :group_description
      t.timestamps null: false
    end
  end
end
