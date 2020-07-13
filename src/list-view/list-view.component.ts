import {Component, EventEmitter, Input, Output, ViewChild, OnChanges} from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-list-view',
  template: `
    <mat-form-field>
        <input matInput placeholder="search" (keyup)="applyFilter($event.target.value)">
    </mat-form-field>
      <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">
          <ng-container matColumnDef="employeeID">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Employee ID</th>
              <td mat-cell *matCellDef="let element"> {{element.employeeID}} </td>
          </ng-container>
          <ng-container matColumnDef="firstName">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>firstName</th>
              <td mat-cell *matCellDef="let element"> {{element.firstName}} </td>
          </ng-container>
          <ng-container matColumnDef="lastName">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>lastName</th>
              <td mat-cell *matCellDef="let element"> {{element.lastName}} </td>
          </ng-container>
          <ng-container matColumnDef="state">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>state</th>
              <td mat-cell *matCellDef="let element"> {{element.state}} </td>
          </ng-container>
          <ng-container matColumnDef="city">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>city</th>
              <td mat-cell *matCellDef="let element"> {{element.city}} </td>
          </ng-container>
          <ng-container matColumnDef="CRR">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>CRR</th>
              <td mat-cell *matCellDef="let element">{{element.CRR}}</td>
          </ng-container>
          <ng-container matColumnDef="isDeleted">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>isDeleted</th>
              <td mat-cell *matCellDef="let element"><mat-icon (click)="deleteEmployee(element)">delete</mat-icon></td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    <mat-paginator [pageSizeOptions]="[5,10]" showFirstLastButtons></mat-paginator>
      `,
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnChanges {
  @Input() employeeList: Employee[];
  @Output() deletedEmployee = new EventEmitter<Employee>();
  dataSource: any;
  displayedColumns: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  constructor() {
  }
  ngOnChanges() {
    this.displayedColumns = ['employeeID', 'firstName', 'lastName', 'state', 'city', 'CRR', 'isDeleted'];
    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteEmployee = (employee: Employee) => {
    console.log(employee);
    this.deletedEmployee.emit(employee);
  }
}
