import { axiosInstance, getToken } from "../utilities/api";

export const deletePet = async (id) => {
    const authToken = getToken();
    const response = await axiosInstance.delete("/pets/" + id, { headers: { Authorization: `Bearer ${authToken}` } });
    return response.data;
}

export const getPet = async (id) => {
    const authToken = getToken();
    const response = await axiosInstance.get("/pets/" + id, { headers: { Authorization: `Bearer ${authToken}` } });
    return response.data;
}

export const editPet = async (id, data) => {
    const authToken = getToken();
    const options = { headers: { Authorization: `Bearer ${authToken}` } }
    const formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }

    if(data.petImage) {
        options.headers["Content-Type"] = "multipart/form-data";
    }

    const response = await axiosInstance.patch("/pets/" + id, formData, options);
    return response.data;
}

export const createPet = async (data) => {
    const authToken = getToken();
    const options = { headers: { Authorization: `Bearer ${authToken}` } }
    const formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }
    if(data.petImage) {
        options.headers["Content-Type"] = "multipart/form-data";
    }

    const response = await axiosInstance.post("/pets", formData, options);
    return response.data;
}