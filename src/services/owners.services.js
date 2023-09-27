import { axiosInstance } from "../utilities/api";

const getToken = () => {
    return localStorage.getItem("userToken");
}

export const getOwner = (id, withPets = false) => {
    const authToken = getToken();
    const URLReq = withPets ? `/owners/${id}?with_pets=true` : `/owners/${id}`;

    return axiosInstance.get(URLReq, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}

export const getOwners = () => {
    const authToken = getToken();
    return axiosInstance.get("/owners", { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}

export const getOwnersByCity = (city, page = 0) => {
    const authToken = getToken();
    return axiosInstance.get(`/owners?city=${city}&page=${page}`, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}