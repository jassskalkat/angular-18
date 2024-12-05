import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDesignationsResponse } from '../model/interface/designations/response.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DesignationsService {
  constructor(private httpClient: HttpClient) {}

  getDesignations(): Observable<IDesignationsResponse> {
    return this.httpClient.get<IDesignationsResponse>(
      environment.API_URL + 'GetAllDesignation',
    );
  }
}
