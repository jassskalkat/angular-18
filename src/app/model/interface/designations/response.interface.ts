export interface IDesignationsResponse {
  message: string;
  result: boolean;
  data: IData[];
}

export interface IData {
  designationId: number;
  designation: string;
}
