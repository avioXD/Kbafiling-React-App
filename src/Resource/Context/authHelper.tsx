import jwt_decode from "jwt-decode";

const USER_TOKEN_NAME = "GHJKSLGOIII@*(&!&%&%*#(!(*#&&!IJKFJLHG)))";
const tokenValidate = (token) => {
  const decoded: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    return false;
  }
  return true;
};

export const setLocalUserToken = (token) => {
  localStorage.setItem(USER_TOKEN_NAME, token);
};

export const getLocalUserToken = () => {
  const token = localStorage.getItem(USER_TOKEN_NAME);
  const validate = tokenValidate(token);
  if (validate) {
    return token;
  }
  return null;
};

export const removeLocalUserToken = () => {
  localStorage.removeItem(USER_TOKEN_NAME);
};
export const jwtDecode = (token) => {
  if (token) {
    return jwt_decode(token);
  }
  return "";
};
export const getLocalUser = () => {
  const token: any = getLocalUserToken();
  if (token) {
    const decoded: any = jwtDecode(token);
    return decoded.user;
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
