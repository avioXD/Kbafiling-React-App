import axios from "axios";
const instance = axios.create({
  baseURL: " https://kbiafiling.herokuapp.com",
});
export default instance;
