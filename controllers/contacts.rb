get "/" do
  redirect "/home"
end

get "/home" do
  erb :"home"
end

post "/contacts" do
  @contact = Contact.create({name:params[:name], phone: params[:phone], email:params[:email], message:params[:message], date:params[:date]})
  if @contact.save
    redirect "/contacts" #should redirect to login after creating contact.
  else
    @error = true
    redirect "/home"
  end
  
end

get "/contacts" do
  erb :contacts
end