class Apartment < ApplicationRecord

  belongs_to :user

  validates :user_id, :street, :city, :state, :postal_code, :country, :manager_name, :manager_number, :manager_hours, presence: true



end
