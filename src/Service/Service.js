import  axios from 'axios';

export const api = axios.create({
    baseURL: 'https://stop-backend.up.railway.app/api'
})

export const login = async (url, dados, setDado) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const singUp = async(url,dados,setDados) =>{
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}
