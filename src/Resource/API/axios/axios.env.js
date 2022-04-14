import axios from "axios";
const instance = axios.create({
  // baseURL: "https://kbiafiling.herokuapp.com",
  baseURL: "https://red-treefrog-72.loca.lt",
});
export default instance;
