unless ActiveRecord::Base.connection.table_exists?(:users)
  ActiveRecord::Base.connection.create_table :users do |t|
    t.string :name
    t.string :email
    t.string :password
  end  
end

unless ActiveRecord::Base.connection.table_exists?(:contacts)
  ActiveRecord::Base.connection.create_table :contacts do |t|
    t.string :name
    t.string :email
    t.string :phone
    t.string :message
    t.string :date
  end  
end