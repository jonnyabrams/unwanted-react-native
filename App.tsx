import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthContext from "./src/auth/context";
import { UserType } from "./src/typings";
import authStorage from "./src/auth/storage";

const App = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const restoreUser = async () => {
      const user = await authStorage.getUser();
      if (user) setUser(user as UserType);
    };

    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
