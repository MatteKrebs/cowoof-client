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

    const login = (authToken, userId, userEmail, userName) => {
        console.log(userName)
        setItem("user", JSON.stringify({ _id: userId, userEmail, userName }));
        setItem("userToken", JSON.stringify(authToken));
        setUserState({ _id: userId, userEmail, userName });
    };

    const logout = () => {
        removeItem("user");
        removeItem("userToken");
        setUserState(null);
    };

    const isLoggedIn = () => {
        return !!user;
    };

    return { user, setUser, login, logout, isLoggedIn };
};

