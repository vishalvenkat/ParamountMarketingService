import {Component, EventEmitter, Input, Output, ViewChild, OnChanges} from '@angular/core';
import {Employee} from '../../Classes/EmployeeClass/employee';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnChanges {
  @Input() employeeList: Employee[];
  @Output() deletedEmployee = new EventEmitter<Employee>();
  dataSource: any;
  displayedColumns: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
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
