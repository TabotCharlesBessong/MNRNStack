import { REACT_APP_BASE_API } from "../../../constant/endpoints";
import { DecodedJwt } from "../models/DecodedJwt.interface";
import { DisplayUser } from "../models/DisplayUser.interface";
import { LoginUser } from "../models/LoginUser.interface";
import { NewUser } from "../models/NewUser";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `${REACT_APP_BASE_API}/auth/register`,
    newUser
  );
  return response.data;
};

const login = async (user: LoginUser): Promise<any> => {
  const response = await axios.post(`${REACT_APP_BASE_API}/auth/login`, user);
  console.log(response)
  console.log("Hello")

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify(response.data));

    const decodedJwt: DecodedJwt = jwtDecode(response.data.token);
    localStorage.setItem("user", JSON.stringify(decodedJwt.user));
  }
  return response.data;
};

const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
};

const verifyJwt = async (jwt: string): Promise<boolean> => {
  const response = await axios.post(`${REACT_APP_BASE_API}/auth/verify-jwt`, {
    jwt,
  });

  if (response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }
  return false;
};

const authService = { register, login, logout, verifyJwt };

export default authService;
