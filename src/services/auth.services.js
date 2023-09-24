import { axiosInstance } from "../utilities/api";

const getToken = () => {
  return localStorage.getItem("userToken");
}

const signUp = ({ userName, userEmail, password, locationCountry, locationCity, locationPostalCode, availabilityNeeded, availabilityToHelp }) => {
  return axiosInstance.post("/signup", {
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

const logIn = ({ username, password }) => {
  return axiosInstance.post("/auth/login", { username, password })
    .then(response => response.data)
}

const verifyToken = () => {
  const authToken = getToken();
  return axiosInstance.get("/auth/verify", { headers: { Authorization: `Bearer ${authToken}` } })
    .then(response => response.data)
}

/* 
const uploadPhoto = (uploadData) => {
  return axiosInstance.post("/api/upload", uploadData)
    .then(response => response.data)
}

const getCurrentUser = () => {
  const authToken = getToken();
  return axiosInstance.get("/api/users", { headers: { Authorization: `Bearer ${authToken}` } })
    .then(response => response.data)
}

const editUser = ({ username, campus, course, image }) => {
  const authToken = getToken();
  return axiosInstance.put("/api/users", { username, campus, course, image }, { headers: { Authorization: `Bearer ${authToken}` } })
} */

const authMethods = {
  signUp,
  logIn,
  verifyToken
}

export default authMethods;