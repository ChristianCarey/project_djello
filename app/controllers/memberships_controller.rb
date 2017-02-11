class MembershipsController < ApplicationController
  
  def index
    @memberships = Membership.where(joinable_id: params[:joinable_id]).where(joinable_type: params[:joinable_type])
    render json: @memberships.to_json(include: :user)
  end  

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render json: @membership.to_json(include: :user)
    else
      render json: @membership.errors.full_messages, status: 404
    end
  end

  def destroy
    @membership = Membership.find_by(id: params[:id])
    if @membership.joinable.user === current_user && @membership.destroy
      render json: @membership.to_json(include: :user)
    else
      render json: "No membership found", status: 404
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :joinable_type, :joinable_id)
  end
end
