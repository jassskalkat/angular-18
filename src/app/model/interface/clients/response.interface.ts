export interface IClientsResponse {
  message: string;
  result: boolean;
  data: IData[];
}

export interface IData {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;
}
