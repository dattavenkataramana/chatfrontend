import axios from "axios";

const api = axios.create({
  baseURL: "https://chat-1tyu.onrender.com/",
});

export default api;
