// src/service.js
import axios from 'axios';

const API_URL = 'https://stop-backend.up.railway.app/api'; 

// Função para fazer login
export const login_auth = async (credentials) => {
  try {
    console.log(credentials)
    const response = await axios.post(`${API_URL}/auth`, credentials);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Outras funções de serviço podem ser adicionadas aqui