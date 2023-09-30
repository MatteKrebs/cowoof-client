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
    const [isLoggedIn, setIsLoggedIn] = useState(!!user);

    const setUser = (user) => {
        setUserState(user);
        setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
    };

    const login = (authToken, userId, userEmail, userName) => {
        setItem("user", JSON.stringify({ _id: userId, userEmail, userName }));
        setItem("userToken", authToken);
        setUserState({ _id: userId, userEmail, userName });
        setIsLoggedIn(true);
    };

    const logout = () => {
        removeItem("user");
        removeItem("userToken");
        setUserState(null);
        setIsLoggedIn(false);
    };

    return { user, setUser, login, logout, isLoggedIn };
};

