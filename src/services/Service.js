import axios from 'axios';

const API_URL = 'https://stop-backend.up.railway.app/api'; 

export const loginRequest = async (credentials) => {
  return axios.post(`${API_URL}/auth`, credentials)
  .then(response => response.data)
  .catch(error => {
    console.error('Erro ao fazer login:', error);
    throw error;
  });
};

// Outras funções de serviço podem ser adicionadas aqui