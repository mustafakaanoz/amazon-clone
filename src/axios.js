import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/payment'
});

export default instance;