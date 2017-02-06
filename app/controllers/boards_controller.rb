class BoardsController < ApplicationController
  def index
    @boards = current_user.boards
    respond_to do |format|
      puts "JSON"
      puts @boards.to_json
      format.json { render json: @boards }
    end
  end

  def show
    @board = Board.find(params[:id])
    if @board
      respond_to do |format|
        format.json
      end
    else 
      render json: "No board found", status: 404
    end
  end

  def create
    @board = current_user.owned_boards.build(board_params)
    if @board.save
      current_user.boards << @board
      render json: @board
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = current_user.boards.find_by(id: params[:id])
    if @board
      @board.destroy
      respond_to do |format|
        format.json { render json: @board }
      end
    else
      render json: "No board found", status: 404
    end
  end


  private

  def board_params
    params.require(:board).permit(:title, :description)
  end
end
