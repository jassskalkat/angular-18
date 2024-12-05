import { Component, inject, OnInit } from '@angular/core';
import { DesignationsService } from '../../services/designations.service';
import { IDesignationsResponse } from '../../model/interface/designations/response.interface';
import { IDesignations } from '../../model/interface/designations/designations.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './designation.component.html',
})
export class DesignationComponent implements OnInit {
  isLoading: boolean = true;
  designationList: IDesignations[] = [];
  designationService: DesignationsService = inject(DesignationsService);

  ngOnInit(): void {
    this.getAllDesignations();
  }

  getAllDesignations(): void {
    this.designationService
      .getDesignations()
      .subscribe((response: IDesignationsResponse) => {
        if (response.result) {
          this.isLoading = false;
          this.designationList = response.data;
          console.log('Designations: ', response.data);
        } else {
          console.error('Error: ', response.message);
        }
      });
  }
}
