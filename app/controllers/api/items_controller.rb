class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    @items = @department.items.all 
    render json: @items
  end

  def show
  end

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: item.errors, status: 422
  end

  def update
    item = @department.items.find(params[:index])
    item.update(item_params)
    render json: item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: {message: "Item deleted"}
  end

  private
    def item_params 
      params.require(:item).permit(:name, :price)
    end

    def set_department
      @department = Department.find(params[:department_id])
    end
end
