import { createContext } from "react";

import { CurrentUserContextType } from "../typings";

const AuthContext = createContext<CurrentUserContextType | null>(null);

export default AuthContext;
