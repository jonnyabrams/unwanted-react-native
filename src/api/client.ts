import { create } from "apisauce";

import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://localhost:9000/api",
});

apiClient.addAsyncRequestTransform(async (req) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  req.headers["x-auth-token"] = authToken;
});

export default apiClient;
