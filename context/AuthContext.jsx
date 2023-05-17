"use client";
import { createContext, useEffect, useState } from "react";
import { getUserDetails } from "../requests";

export const AuthenticateContext = createContext(null);

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const handleAuth = (token, email, id) => {
    setUser({ token, email, id });
    localStorage.setItem("token", JSON.stringify({ token, email, id }));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const fetchData = async (token) => {
    let { user } = await getUserDetails(token);
    let value = {
      image: user[0]?.image,
      name: user[0]?.name,
      background: user[0]?.influencer?.background,
    };
    setUserInfo(value);
  };

  useEffect(() => {
    const items = localStorage.getItem("token");
    if (items) {
      setUser(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    if (user?.token) {
      fetchData(user?.token);
    }
  }, [user?.token]);

  return (
    <AuthenticateContext.Provider
      value={{ user, handleAuth, logOut, userInfo }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

export default AuthContext;
