import axios from 'axios';
import { BASE_URL } from '../Utils/system';


export const loginRequest = async (credentials) => {
  return axios.post(`${BASE_URL}/api/auth`, credentials)
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      throw error;
    });
};

export const logOut = async (token) => {
  return axios.delete(`${BASE_URL}/api/auth`, {
    headers:{
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao deletar token:', error);
      throw error;
    });
};


export const getUserById = async (user_id,token) => {
  return axios.get(`${BASE_URL}/api/users/${user_id}`,{
    headers: {
      'Authorization': `Bearer ${token}`, // Adicionando o token no cabeçalho
    },
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao recuperar usuario:', error);
      throw error;
    });
};

export const registerRequest = async (requestBody) => {
  return axios.post(`${BASE_URL}/api/users`, requestBody)
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      throw error;
    });
}

// Outras funções de serviço podem ser adicionadas aqui