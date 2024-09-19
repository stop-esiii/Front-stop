// src/service.js
import axios from 'axios';

const API_URL = 'https://stop-backend.up.railway.app/'; 

// Função para fazer login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Outras funções de serviço podem ser adicionadas aqui