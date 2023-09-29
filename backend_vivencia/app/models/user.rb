class User < ApplicationRecord
    validates :name, :email, :password, presence: {message: 'Falhou, parametro obrigatorio'}
    validates :password, length: {minimum: 3, maximum: 20, message: 'Quantidade de caracteres incorreta'} 
    validates :email, uniqueness: {message: 'Falha, este email ja esta sendo utilizado'} 
end
