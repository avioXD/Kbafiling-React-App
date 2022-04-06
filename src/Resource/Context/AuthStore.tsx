import jwt_decode from "jwt-decode";

const USER_TOKEN = "GHJKSLGOIII@*(&!&%&%*#(!(*#&&!IJKFJLHG)))";
const tokenValidate = (token) => {
  const decoded: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    return false;
  }
  return true;
};

export const setLocalUserToken = (token) => {
  localStorage.setItem(USER_TOKEN, token);
};

export const getLocalUserToken = () => {
  const token = localStorage.getItem(USER_TOKEN);
  const validate = tokenValidate(token);
  if (validate) {
    return token;
  }
  return null;
};

export const removeLocalUserToken = () => {
  localStorage.removeItem(USER_TOKEN);
};
export const jwtDecode = (token) => {
  return jwt_decode(token);
};
export const getLocalUser = () => {
  const token = getLocalUserToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
export const getLocallyAuthenticated = () => {
  const token = getLocalUserToken();
  if (token) {
    return true;
  }
  return false;
};
