class CardsController < ApplicationController
  def create
    list = List.find_by(id: params[:list_id])
    @card = list.cards.build(card_params) 
    @card.user = current_user
    if @card.save
      render json: @card.to_json(include: :list)
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:list_id, :title)
  end
end
