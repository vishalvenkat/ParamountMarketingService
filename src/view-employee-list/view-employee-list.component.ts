import { Component, OnInit } from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';
import {EmployeeServiceService} from '../Services/employee-service.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-view-employee-list',
  template: `
      <div class="background">
      <mat-tab-group headerPosition="below" mat-stretch-tabs>
          <mat-tab label="Card View"  class="example-large-box">
              <div><app-card-view [employeeList]="employeeList" (deletedEmployee)="deleteEmployee($event)">
              </app-card-view></div></mat-tab>
          <mat-tab label="List View"><app-list-view [employeeList]="employeeList" (deletedEmployee)="deleteEmployee($event)">
          </app-list-view></mat-tab>
      </mat-tab-group>
  </div>
  `,
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {
employeeList: Employee[];
  constructor(private db: EmployeeServiceService, private snackBar: MatSnackBar) {
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
    this.snackBar.open('Employee deleted', '', {duration: 1000});
  }

}
