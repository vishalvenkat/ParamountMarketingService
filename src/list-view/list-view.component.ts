import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-list-view',
  template: `
    <mat-form-field>
        <input matInput placeholder="search" (keyup)="applyFilter($event.target.value)">
    </mat-form-field>
      <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">

          <!-- Position Column -->
          <ng-container matColumnDef="firstName">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>firstName</th>
              <td mat-cell *matCellDef="let element"> {{element.firstName}} </td>
          </ng-container>

          <!-- Name Column -->
          <ng-container matColumnDef="lastName">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>lastName</th>
              <td mat-cell *matCellDef="let element"> {{element.lastName}} </td>
          </ng-container>

          <!-- Weight Column -->
          <ng-container matColumnDef="state">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>state</th>
              <td mat-cell *matCellDef="let element"> {{element.state}} </td>
          </ng-container>

          <!-- Symbol Column -->
          <ng-container matColumnDef="city">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>city</th>
              <td mat-cell *matCellDef="let element"> {{element.city}} </td>
          </ng-container>

          <ng-container matColumnDef="CRR">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>CRR</th>
              <td mat-cell *matCellDef="let element"> {{element.CRR}} </td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    <mat-paginator [pageSizeOptions]="[5,10]" showFirstLastButtons></mat-paginator>
      `,
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() employeeList: Employee[];
  dataSource: any;
  displayedColumns: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() {
  }

  ngOnInit() {
    console.log('Length: ' + this.employeeList.length);
    this.displayedColumns = ['firstName', 'lastName', 'state', 'city', 'CRR'];
    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
