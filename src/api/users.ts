import client from "./client";
import { RegisterInfoType } from "../typings";

const register = (userInfo: RegisterInfoType) => client.post("/users", userInfo);

export default { register };
