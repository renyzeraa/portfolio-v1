import axios from 'axios'

export const api = axios.create({
  baseURL : 'https://portfolio-api-vze9.onrender.com/'
})