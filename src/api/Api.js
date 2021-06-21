import axios from 'axios';
import store from "@/store";

const Api = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    Authorization: `Bearer ${store.state.user.token}`
  }
});

export default Api;