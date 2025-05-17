import axios from "axios";

const instance = axios.create({
  baseURL: "https://usertask-sawv.onrender.com/",
});

export default instance;
