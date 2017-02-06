class ListsController < ApplicationController
  def create
    board = current_user.boards.find_by(id: params[:board_id])
    @list = board.lists.build(list_params)
    @list.user = current_user
    if @list.save
      render json: @list.to_json(include: :cards)
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:board_id, :title)
  end
end
