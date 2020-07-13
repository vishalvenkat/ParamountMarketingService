import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-view',
  template: `
      <mat-form-field>
          <input matInput placeholder="search" (keyup)="applyFilter($event.target.value)">
      </mat-form-field>
      <mat-grid-list cols="2" rowHeight="4:1">
          <div *ngFor="let employee of obs | async">
              <mat-grid-tile><mat-card>
                  <mat-card-header>
                            <mat-card-title>{{employee.firstName}}</mat-card-title>
                            <mat-card-subtitle>{{employee.lastName}}</mat-card-subtitle>
                            <mat-icon (click)="deleteEmployee(employee)">close</mat-icon>
                  </mat-card-header>
                  <mat-card-content>
                      <p>{{employee.city}}</p>
                      <p>{{employee.CRR}}</p>
                  </mat-card-content>
              </mat-card></mat-grid-tile>
          </div>
      </mat-grid-list>
      <mat-paginator [pageSizeOptions]="[4]"></mat-paginator>`,
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnChanges {
  @Input() employeeList: Employee[];
  @Output() deletedEmployee = new EventEmitter<Employee>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Employee>;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Employee>(this.employeeList);;
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
   }
  deleteEmployee = (employee: Employee) => {
    console.log(employee);
    this.deletedEmployee.emit(employee);
  }
  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
