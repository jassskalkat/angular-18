export interface IClientProjectsResponse {
  message: string;
  result: boolean;
  data: IDate[];
}

export interface IDate {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  clientName: string;
  clientProjectId: number;
}
