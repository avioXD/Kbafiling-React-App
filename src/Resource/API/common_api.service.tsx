import axios from "./axios/axios.env";

export const updateUser = (credentials) => {
  return axios.post("/api/v1/user/update", credentials);
};
export const getAllService = () => {
  return axios.get("/api/v1/service");
};
