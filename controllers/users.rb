not_found do

  erb :oops
end

get "/profile" do
  if session[:user_id] # && session[:user_id] == params[:id].to_i
    @user = User.find(session[:user_id])
    erb :show, :layout => :"layout-admin"
  else
    redirect "/login"
  end
end

get "/logout" do
  session[:user_id] = nil
  redirect "/login"
end

get "/login" do
  erb :login, :layout => :"kpc-layout"
end


post "/valid" do
  @user = User.where(email:params[:email]).first
  if @user.nil?
    @error = true
    redirect "/login"
  else
    user_password = BCrypt::Password.new(@user.password)
    if user_password == params[:password]
      session[:user_id] = @user.id
      redirect "/profile" # user_path(@user.id)
    else
      @error = true
      redirect "/login"
    end
  end
end
  
get "/create_user" do
  erb :create
end

post "/save_user" do
  @user = User.new({name: params[:name], email: params[:email], password: params[:password]})
  # add unique active record.
  if @user.valid? 
    the_password = BCrypt::Password.create(params[:password])
    @user.password = the_password
    @user.save
    #redirect make a get request to the following path
    redirect "/login" # :"owners/add_owner_success"
  else
    @error = true
    erb :create
  end
end