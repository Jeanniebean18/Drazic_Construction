


get "/" do
  redirect "/home"
end

get "/home" do
  erb :"home", :layout => :"layout-two"
   
end

get "/success" do
  erb :success
end

post "/contacts" do
  @contact = Contact.create({name:params[:name], phone: params[:phone], email:params[:email], message:params[:message], date:params[:date]})
  if @contact.save
    Pony.mail ( {
        :to => 'jeannie@kickpunchcreative.com, shineartdesigns@gmail.com',
        :from => "jeannie@kickpunchcreative.com",
        :subject => "Drazic Website Contact Submission :  #{params[:name]}",
        :body=> "name: #{params[:name]} - phone: #{params[:phone]}- message: #{params[:message]}, --- Contact them at: #{params[:email]}",
        :via => :smtp,
        :via_options => {  
          :address   => 'smtp.gmail.com',  
          :port   => '587',  
          :enable_starttls_auto => true,
          :user_name   => 'jeannie@kickpunchcreative.com',  
          :password   => 'genie1983',  
          :authentication   => :plain,   
          :domain => "kickpunchcreative.com"
      }
      })
    redirect "/success" #should redirect to login after creating contact.
  else
    @error = true
    redirect "/home"
  end
end

get "/contact/:id" do
  @contact = Contact.find(params[:id])
  @contact.destroy
  redirect "/profile"
end

get "/work" do

erb :work

end



