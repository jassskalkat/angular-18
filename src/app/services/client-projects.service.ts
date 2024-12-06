import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IClientProjectsResponse } from '../model/interface/client-projects/response.interface';
import { ClientProject } from '../model/class/ClientProject';

@Injectable({
  providedIn: 'root',
})
export class ClientProjectsService {
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<IClientProjectsResponse> {
    return this.httpClient.get<IClientProjectsResponse>(
      environment.API_URL + 'GetAllClientProjects',
    );
  }

  createProject(project: ClientProject): Observable<IClientProjectsResponse> {
    return this.httpClient.post<IClientProjectsResponse>(
      environment.API_URL + 'AddUpdateClientProject',
      project,
    );
  }
}
