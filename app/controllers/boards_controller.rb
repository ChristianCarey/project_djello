class BoardsController < ApplicationController
  def index
    @boards = current_user.shared_boards
    render json: @boards
  end

  def show
    @board = Board.find(params[:id])
    if @board
      respond_to do |format|
        format.json
      end
    else 
      render json: "No board found", status: 422
    end
  end
end
