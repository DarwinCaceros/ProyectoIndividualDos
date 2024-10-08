import axios from 'axios';

const API_URL = "http://localhost:8080/api/notas";

const obtenerNotas = () => {
    return axios.get(API_URL);
};

const crearNota = (nota) => {
    return axios.post(API_URL, nota);
};

const actualizarNota = (id, nota) => {
    return axios.put(`${API_URL}/${id}`, nota);
};

const eliminarNota = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const notaService = {
    obtenerNotas,
    crearNota,
    actualizarNota,
    eliminarNota
};

export default notaService;
