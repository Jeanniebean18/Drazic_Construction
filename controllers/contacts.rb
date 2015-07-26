get "/" do
  redirect "/home"
end

get "/home" do
  erb :"home"
end

post "/contacts" do
  @contact = Contact.create({name:params[:name], phone: params[:phone], email:params[:email], message:params[:message], date:params[:date]})
  if @contact.save
    Pony.mail(:to => 'jeannie@kickpunchcreative.com', :from => 'jeannie@kickpunchcreative.com', :subject => 'hi', :body => "#{params[:name]},#{params[:phone]} ")
    redirect "/home#contact" #should redirect to login after creating contact.
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



