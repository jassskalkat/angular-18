import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { IClientProjects } from '../../model/interface/client-projects/client-project.interface';
import { ClientProject } from '../../model/class/ClientProject';
import { ClientProjectsService } from '../../services/client-projects.service';
import { IClientProjectsResponse } from '../../model/interface/client-projects/response.interface';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client-project.component.html',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    empName: new FormControl(''),
    empId: new FormControl(0),
    empCode: new FormControl(''),
    empEmailId: new FormControl(''),
    empDesignation: new FormControl(''),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    clientName: new FormControl(''),
    clientProjectId: new FormControl(0),
  });

  isLoading: boolean = true;
  clientProjectsList: IClientProjects[] = [];
  clientProjectObject: ClientProject = new ClientProject();
  clientProjectsService: ClientProjectsService = inject(ClientProjectsService);

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.clientProjectsService
      .getProjects()
      .subscribe((response: IClientProjectsResponse): void => {
        if (response.result) {
          this.isLoading = false;
          this.clientProjectsList = response.data;
          console.log('Projects: ', response.data);
        } else {
          console.error('Error: ', response.message);
          alert('Error: ' + response.message);
        }
      });
  }

  onResetForm(): void {
    this.clientProjectObject = new ClientProject();
  }

  onAddUpdateClientProject(): void {
    console.log('Client Project Object: ', this.clientProjectObject);
  }

  onEditClientProject(clientProject: ClientProject): void {
    this.clientProjectObject = clientProject;
    console.log('Client Project Object: ', this.clientProjectObject);
  }

  onDeleteClientProject(clientProjectId: number) {
    console.log('Client Project Id: ', clientProjectId);
  }
}
