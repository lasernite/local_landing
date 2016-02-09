class UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		if @user.save
			render 'users/index'
		else
			render 'welcome/index'
		end
	end

	def show
		@user = User.find(params[:id])
	end

	private
	    def user_params
	  	  params.require(:user).permit(:email,:city,:latitude,:longitude)
	    end
end
