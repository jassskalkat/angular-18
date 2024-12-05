import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRoles } from '../../model/interface/roles/roles.interface';
import { IRolesResponse } from '../../model/interface/roles/response.interface';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  fullName: string = 'Japneet Kalkat';
  age: number = 22;
  currentRole: string = 'Software Developer';
  company: string = 'Amsted Industries';
  inputType1: string = 'checkbox';
  inputType2: string = 'radio';
  inputType3: string = 'button';

  isLoading: boolean = true;
  roleList: IRoles[] = [];
  rolesService: RolesService = inject(RolesService);

  ngOnInit(): void {
    this.getAllRoles();
  }

  printName(): void {
    alert('Name: ' + this.fullName);
  }

  printAge(): void {
    alert('Age: ' + this.age);
  }

  printRole(): void {
    alert('Role: ' + this.currentRole);
  }

  printCompany(): void {
    alert('Company: ' + this.company);
  }

  getAllRoles(): void {
    this.rolesService.getRoles().subscribe((response: IRolesResponse) => {
      if (response.result) {
        this.isLoading = false;
        this.roleList = response.data;
        console.log('Roles: ', response.data);
      } else {
        console.error('Error: ', response.message);
      }
    });
  }
}
