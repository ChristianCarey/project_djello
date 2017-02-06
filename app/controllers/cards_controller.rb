class CardsController < ApplicationController

  def show 
    @card = Card.find_by(id: params[:id])
    if @card
      render json: @card.to_json(include: { list: { include: :cards}})
    else
      render Json: "No card found", status: 404
    end
  end

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

  def update
    @card = Card.find_by(id: params[:id])
    if @card.update(card_params)
      render json: @card.to_json(include: { list: { include: :cards}})
    else 
      render json: @card.errors.full_messages, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:id, :list_id, :title, :description, :new_position)
  end
end
