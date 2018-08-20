export const typeDefs = ["type DeleteUserResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  DeleteUser(email: String!): DeleteUserResponse!\n  EmailLogin(email: String!, password: String!): EmailLoginResponse!\n  EmailSignUp(username: String!, email: String!, password: String!, profilePhoto: String): EmailSignUpResponse!\n}\n\ntype EmailLoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetAllUsersResponse {\n  ok: Boolean!\n  error: String\n  user: [User]\n}\n\ntype Query {\n  GetAllUsers: GetAllUsersResponse!\n  GetUser(id: Int!): GetUserResponse!\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  username: String!\n  password: String\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetAllUsers: GetAllUsersResponse;
  GetUser: GetUserResponse;
}

export interface GetUserQueryArgs {
  id: number;
}

export interface GetAllUsersResponse {
  ok: boolean;
  error: string | null;
  user: Array<User> | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  username: string;
  password: string | null;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  DeleteUser: DeleteUserResponse;
  EmailLogin: EmailLoginResponse;
  EmailSignUp: EmailSignUpResponse;
}

export interface DeleteUserMutationArgs {
  email: string;
}

export interface EmailLoginMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  username: string;
  email: string;
  password: string;
  profilePhoto: string | null;
}

export interface DeleteUserResponse {
  ok: boolean;
  error: string | null;
}

export interface EmailLoginResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string | null;
}
