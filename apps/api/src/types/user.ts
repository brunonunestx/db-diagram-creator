export interface User {
  name: string;
  email: string;
  role: Roles;
}

export interface LoginUser extends User {
  password: string;
}

export enum Roles {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}
