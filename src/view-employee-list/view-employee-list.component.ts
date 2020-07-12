import { Component, OnInit } from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';
import {EmployeeServiceService} from '../Services/employee-service.service';


@Component({
  selector: 'app-view-employee-list',
  template: `
      <mat-tab-group headerPosition="below">
          <mat-tab label="Card View"><app-card-view [employeeList]="employeeList"></app-card-view></mat-tab>
          <mat-tab label="List View"><app-list-view [employeeList]="employeeList" (deletedEmployee)="deleteEmployee($event)">
          </app-list-view></mat-tab>
      </mat-tab-group>
  `,
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {
employeeList: Employee[];
  constructor(private db: EmployeeServiceService) {
  }

  ngOnInit() {
    this.employeeList = [];
    console.log('View employee list');
    this.db.employeeArray.subscribe(array => this.employeeList = array);
  }
  deleteEmployee = (employee: Employee) => {
    console.log('Going to delete: ' + employee.isDeleted);
    this.employeeList = this.db.deleteEmployee(employee.employeeID, this.employeeList);
    this.db.updateEmployeeList(this.employeeList);
  }

}
