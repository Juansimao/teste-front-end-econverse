import axios from 'axios';

export const api = axios.create({
  baseURL: '/econverse/teste-front-end/junior/tecnologia/lista-produtos',
});