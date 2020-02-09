class ApartmentsController < ApplicationController

  def index
    apartments = Apartment.all
    render json: apartments
  end

  # def show
  #   apartment = Apartment.find(params[:id])
  # end 

  def apartment_params
        params.require(:apartment).permit(:user_id, :street, :city, :state, :country, :postal_code, :manager_name, :manager_number, :manager_hours, :user_id)
    end

  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
        render json: apartment
    else
        render json: apartment.errors
    end
  end


  def destroy
    Apartment.destroy(params[:id])
    render json: Apartment.all
  end



end
