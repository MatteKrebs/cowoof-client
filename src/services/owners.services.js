import { axiosInstance } from "../utilities/api";

const getToken = () => {
    return localStorage.getItem("userToken");
}

export const getOwner = (id, withPets = false, withGroups = false) => {
    const authToken = getToken();
    const URLReq = new URL("/owners/" + id, axiosInstance.defaults.baseURL);

    if(withPets) {
        URLReq.searchParams.append("with_pets", "true");
    }
    if(withGroups) {
        URLReq.searchParams.append("with_groups", "true");
    }


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