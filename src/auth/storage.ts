import * as SecureStore from "expo-secure-store";

const key = "authToken";

const setToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing auth token", error);
  }
};

const getToken = async () => {
  try {
    // same as two lines storing logic as variable then returning it
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error deleting auth token", error);
  }
};

export default {
  getToken,
  removeToken,
  setToken,
};
