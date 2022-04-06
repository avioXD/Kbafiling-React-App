import axios from "./axios/axios.env";

export const loginUser = (credentials) => {
  return axios.post("/api/auth/login", credentials);
};
export const registerUser = (credentials) => {
  return axios.post("/api/auth/register", credentials);
};
