import { axiosInstance, getToken } from "../utilities/api";

export const deletePet = (id) => {
    const authToken = getToken();
    return axiosInstance.delete("/pets/" + id, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}

export const getPet = (id) => {
    const authToken = getToken();
    return axiosInstance.get("/pets/" + id, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}

export const editPet = (id, data) => {
    const authToken = getToken();
    return axiosInstance.patch("/pets/" + id, data, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}

export const createPet = (data) => {
    const authToken = getToken();
    return axiosInstance.post("/pets", data, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}