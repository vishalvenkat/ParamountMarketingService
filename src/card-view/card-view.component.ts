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
              <mat-grid-tile>
                  <mat-card>
                      <mat-grid-list cols="2" rowHeight="50px">
                          <mat-grid-tile class="card-top">{{employee.firstName}}, {{employee.lastName}}</mat-grid-tile>
                          <mat-grid-tile class="card-top"><button mat-icon-button (click)="deleteEmployee(employee)"><mat-icon>close</mat-icon></button></mat-grid-tile>
                          <mat-grid-tile><img [src] = getImageUrl(employee.gender) alt=employee.gender></mat-grid-tile>
                          <mat-grid-tile>{{'CRR: ' + employee.CRR}}</mat-grid-tile>
                      </mat-grid-list>
                  </mat-card>
              </mat-grid-tile>
          </div>
      </mat-grid-list>
      <mat-paginator [pageSizeOptions]="[4]" showFirstLastButtons></mat-paginator>`,
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
    this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
   }
  deleteEmployee = (employee: Employee) => {
    this.deletedEmployee.emit(employee);
  }
  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getImageUrl(gender: string) {
    if (gender === 'male') { return './assets/Images/male.png'; }
    return './assets/Images/female.png';
  }
}
