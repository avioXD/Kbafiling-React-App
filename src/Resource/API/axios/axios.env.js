import axios from "axios";
const instance = axios.create({
  // baseURL: "https://kbiafiling.herokuapp.com",
  baseURL: "http://25.67.135.248:3000",
});
export default instance;
