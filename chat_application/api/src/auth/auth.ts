import { User } from "src/utils/typeorm";
import { ValidateUserDetails } from "../utils/types";

export interface IAuthService {
  validateUser(userCredentials:ValidateUserDetails):Promise <User | null>
}