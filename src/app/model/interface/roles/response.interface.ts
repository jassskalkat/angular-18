export interface IRolesResponse {
  message: string;
  result: boolean;
  data: IData[];
}

export interface IData {
  roleId: number;
  role: string;
}
