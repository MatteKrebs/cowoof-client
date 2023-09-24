import { axiosInstance } from "../utilities/api";

const getToken = () => {
    return localStorage.getItem("userToken");
}

export const getOwner = (id) => {
    const authToken = getToken();
    return axiosInstance.get(`/owners/${id}`, { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => response.data)
}
