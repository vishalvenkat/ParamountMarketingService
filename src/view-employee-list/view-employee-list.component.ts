import { Component, OnInit } from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';

@Component({
  selector: 'app-view-employee-list',
  template: `
      <mat-tab-group headerPosition="below">
          <mat-tab label="Card View"> <app-card-view [employeeList]="employeeList"></app-card-view></mat-tab>
          <mat-tab label="List View"><app-list-view [employeeList]="employeeList"></app-list-view></mat-tab>
      </mat-tab-group>
  `,
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {
employeeList: Employee[] = [];
  constructor() {
    this.employeeList.push(new Employee('Vishal', 'v', 'Tamil nadu', 'chennai'
    ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 4, 2, 1));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
    this.employeeList.push(new Employee('Sai', 'reddy', 'Andra', 'Vijayawada'
      ,  new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), new Date('Thu Jul 30 2020 00:00:00 GMT+0530'), 5, 2, 3));
  }

  ngOnInit() {
  }

}
