import { Component, inject, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { IClients } from '../../model/interface/clients/client.interface';
import { IClientsResponse } from '../../model/interface/clients/response.interface';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  isLoading: boolean = true;
  clientList: IClients[] = [];
  clientObject: Client = new Client();
  clientsService: ClientsService = inject(ClientsService);

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.clientsService
      .getClients()
      .subscribe((response: IClientsResponse): void => {
        if (response.result) {
          this.isLoading = false;
          this.clientList = response.data;
          console.log('Clients: ', response.data);
        } else {
          console.error('Error: ', response.message);
          alert('Error: ' + response.message);
        }
      });
  }

  onResetForm(): void {
    this.clientObject = new Client();
  }

  onSaveClient(): void {
    this.clientsService
      .createClient(this.clientObject)
      .subscribe((response: IClientsResponse) => {
        if (response.result) {
          console.log('Client Object: ', this.clientObject);
          alert('Client saved successfully');
          this.clientObject = new Client();
          this.getAllClients();
        } else {
          alert('Error: ' + response.message);
        }
      });
  }

  onEditClient(client: Client): void {
    this.clientObject = client;
  }

  onDeleteClient(clientId: number) {
    const isDelete = confirm('Are you sure you want to delete this client?');
    if (isDelete) {
      this.clientsService
        .deleteClient(clientId)
        .subscribe((response: IClientsResponse) => {
          if (response.result) {
            alert('Client deleted successfully');
            this.getAllClients();
          } else {
            alert('Error: ' + response.message);
          }
        });
    }
  }
}
