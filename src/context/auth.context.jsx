import React, { useState, useEffect, createContext } from "react";
import authMethods from "../services/auth.services.js";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(""); // Add user-related properties here
  const [locationCountry, setLocationCountry] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationPostalCode, setLocationPostalCode] = useState(0);
  const [availabilityToHelp, setAvailabilityToHelp] = useState("");
  const [availabilityNeeded, setAvailabilityNeeded] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [pets, setPets] = useState([]);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      authMethods
        .verifyToken(storedToken)
        .then((userPayload) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(userPayload);
          // Set user-related properties here
          setUserName(userPayload.userName);
          setLocationCountry(userPayload.locationCountry);
          setLocationCity(userPayload.locationCity);
          setLocationPostalCode(userPayload.locationPostalCode);
          setAvailabilityToHelp(userPayload.availabilityToHelp);
          setAvailabilityNeeded(userPayload.availabilityNeeded);
          setProfilePicture(userPayload.profilePicture);
          setPets(userPayload.pets);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          // Reset user-related properties here
          setUserName("");
          setLocationCountry("");
          setLocationCity("");
          setLocationPostalCode(0);
          setAvailabilityToHelp("");
          setAvailabilityNeeded("");
          setProfilePicture("");
          setPets([]);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      // Reset user-related properties here
      setUserName("");
      setLocationCountry("");
      setLocationCity("");
      setLocationPostalCode(0);
      setAvailabilityToHelp("");
      setAvailabilityNeeded("");
      setProfilePicture("");
      setPets([]);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setUser,
        storeToken,
        authenticateUser,
        logOutUser,
        userName,
        locationCountry,
        locationCity,
        locationPostalCode,
        availabilityToHelp,
        availabilityNeeded,
        profilePicture,
        pets,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };