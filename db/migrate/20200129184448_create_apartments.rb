class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.integer :user_id
      t.string :street
      t.string :city
      t.integer :postal_code
      t.string :state
      t.string :country
      t.string :manager_name
      t.string :manager_number
      t.string :manager_hours

      t.timestamps
    end
  end
end
