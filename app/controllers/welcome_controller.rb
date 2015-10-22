class WelcomeController < ApplicationController
  def index
  	@user = User.new

  	# Get city name, overcome slow geocoder bug so doesn't crash whole page
  	@city = ''
  	@is_city = request.location.city
  	if @is_city == nil or @is_city == ''
  		@city = ''
  	else
  		@city = @is_city
  	end

  end
end
