class UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		@user.save
		render 'welcome/index'
	end

	private
	    def user_params
	  	  params.require(:user).permit(:email,:city,:latitude,:longitude)
	    end
end
