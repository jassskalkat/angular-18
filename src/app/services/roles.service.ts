import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRolesResponse } from '../model/interface/roles/response.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private httpClient: HttpClient) {}

  getRoles(): Observable<IRolesResponse> {
    return this.httpClient.get<IRolesResponse>(
      environment.API_URL + 'GetAllRoles',
    );
  }
}
