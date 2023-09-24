import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");

    if (user) {
        return JSON.parse(user);
    }

    return null;
}

export const useAuth = () => {
    const { setItem, removeItem } = useLocalStorage();
    const [user, setUserState] = useState(getUserFromLocalStorage);

    const setUser = (user) => {
        setUserState(user);
        setItem("user", JSON.stringify(user));
    };

    const login = (authToken) => {
        setItem("userToken", JSON.stringify(authToken));
    };

    const logout = () => {
        removeItem("user");
        removeItem("userToken");
    };

    return { user, setUser, login, logout };
};

