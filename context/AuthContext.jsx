"use client";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUserDetails } from "../requests";
import { QueryClient, QueryClientProvider } from "react-query";

export const AuthenticateContext = createContext(null);

const queryClient = new QueryClient();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const handleAuth = useCallback((token, email, id) => {
    setUser({ token, email, id });
    localStorage.setItem("token", JSON.stringify({ token, email, id }));
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  const fetchData = async (token) => {
    let {
      data: { user },
    } = await getUserDetails(token);
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

  const contextValues = useMemo(
    () => ({
      user,
      handleAuth,
      logOut,
      userInfo,
    }),
    [user, userInfo, handleAuth, logOut]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticateContext.Provider value={contextValues}>
        {children}
      </AuthenticateContext.Provider>
    </QueryClientProvider>
  );
}

export default AuthContext;
