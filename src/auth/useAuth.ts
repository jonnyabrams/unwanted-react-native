import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "../auth/storage";
import { UserType } from "../typings";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) return null;
  const { user, setUser } = authContext;

  const logIn = (authToken: string) => {
    const user: UserType = jwtDecode(authToken);
    setUser(user);
    authStorage.setToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};

export default useAuth;
