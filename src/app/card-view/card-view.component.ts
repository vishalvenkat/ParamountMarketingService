import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {Employee} from '../../Classes/EmployeeClass/employee';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
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
