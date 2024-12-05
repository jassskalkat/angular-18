import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent, NgClass],
  templateUrl: './master.component.html',
})
export class MasterComponent {
  currenComponent: string = '';

  changeComponent(component: string) {
    this.currenComponent = component;
  }
}
