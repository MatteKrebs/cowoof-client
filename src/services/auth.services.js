import { axiosInstance } from "../utilities/api";

const getToken = () => {
  return localStorage.getItem("userToken");
}

const signUp = ({ userName, userEmail, password, locationCountry, locationCity, locationPostalCode, availabilityNeeded, availabilityToHelp }) => {
  return axiosInstance.post("/auth/signup", {
    userName,
    userEmail,
    password,
    locationCountry,
    locationCity,
    locationPostalCode,
    availabilityNeeded,
    availabilityToHelp
  })
    .then((response) => {
      return response.data;
    })
};

const logIn = ({ email, password }) => {
  return axiosInstance.post("/auth/login", { email, password })
    .then(response => response.data)
}

const verifyToken = () => {
  const authToken = getToken();
  return axiosInstance.get("/auth/verify", { headers: { Authorization: `Bearer ${authToken}` } })
    .then(response => response.data)
}

const authMethods = {
  signUp,
  logIn,
  verifyToken
}

export default authMethods;