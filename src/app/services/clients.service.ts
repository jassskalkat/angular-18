import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClientsResponse } from '../model/interface/clients/response.interface';
import { environment } from '../../environments/environment';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<IClientsResponse> {
    return this.httpClient.get<IClientsResponse>(
      environment.API_URL + 'GetAllClients',
    );
  }

  createClient(client: Client): Observable<IClientsResponse> {
    return this.httpClient.post<IClientsResponse>(
      environment.API_URL + 'AddUpdateClient',
      client,
    );
  }

  deleteClient(clientId: number): Observable<IClientsResponse> {
    return this.httpClient.delete<IClientsResponse>(
      environment.API_URL + '/DeleteClientByClientId?clientId=' + clientId,
    );
  }
}
