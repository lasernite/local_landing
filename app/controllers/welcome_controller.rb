class WelcomeController < ApplicationController
  def index
  	@user = User.new

  	# Get city name
  	@city = request.location.city
  	if @city == nil or @city == ''
  		@city = ''
  	end

  end
end
