export type CreateUserDetails = {
  email:string
  password:string
  firstName:string
  lastName:string
}

export type ValidateUserDetails = {
  username: string;
  password: string;
};