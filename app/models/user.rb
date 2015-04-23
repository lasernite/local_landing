class User < ActiveRecord::Base
	validates :email, email_format: { message: "That doesn't appear to be a valid email address." }
end
