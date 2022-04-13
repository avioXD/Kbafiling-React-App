import axios from "./axios/axios.env";

export const updateUser = (credentials) => {
  return axios.patch(`/api/v1/user/${credentials.id}`, credentials);
};
export const getAllService = () => {
  return axios.get("/api/v1/service");
};
export const getNotification = (id) => {
  return axios.get(`/api/v1/user/notification/${id}`);
};
export const getUserPurchases = (id) => {
  return axios.get(`/api/v1/user/purchase/${id}`);
};
export const getUserOrders = (id) => {
  return axios.get(`/api/v1/user/order/${id}`);
};
