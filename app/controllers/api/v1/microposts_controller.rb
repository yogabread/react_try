class Api::V1::MicropostsController < Api::V1::BaseController
  def index
    respond_with Micropost.all
  end

  def create
    respond_with :api, :v1, Micropost.create(micropost_params)
    # Micropost.create(params[:user_id] == current_user.id)
  end

  def destroy
    respond_with Micropost.destroy(params[:id])
  end

  def update
    micropost = Micropost.find(params["id"])
    micropost.update_attributes(micropost_params)
    respond_with micropost, json: micropost
  end

 private

  def micropost_params
    params.require(:micropost).permit(:id, :content, :user_id)
  end
end