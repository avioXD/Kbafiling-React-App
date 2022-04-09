import axios from "./axios/axios.env";

export const loginUser = (credentials) => {
  return axios.post("/api/v1/user/login", credentials);
};
export const registerUser = (credentials) => {
  return axios.post("/api/v1/user/signup", credentials);
};
