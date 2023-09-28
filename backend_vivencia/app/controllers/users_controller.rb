class UsersController < ApplicationController
    def index
        users = User.all.select(:id, :name, :email)
        render json: {users: users} 
    end
    def destroy
        User.find(params[:id]).destroy
        render json: {message: 'delete'}
    end 
    def create
        users = User.create!(user_params)
        render json: {message: 'inserido com sucesso'}
    end
    def user_params
        params.permit(:id, :name, :email, :number, :password)
    end
    
    def update
        User.find(params[:id]).update!(user_params)
        render json: {message: 'atualizado com sucesso'}
    end


end
