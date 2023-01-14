import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "../auth/storage";
import { UserType } from "../typings";

const useAuth = () => {
  // have to check for no authContext to appease typescript
  // can do in one line by doing eg. authContext?.user etc - have done this elsewhere
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
