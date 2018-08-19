export const typeDefs = ["type User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  userName: String!\n  password: String\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetUser(id: Int!): GetUserResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  GetUser: GetUserResponse;
}

export interface GetUserQueryArgs {
  id: number;
}

export interface GetUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  userName: string;
  password: string | null;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
}
