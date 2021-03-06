import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Classes/EmployeeClass/employee';
import {EmployeeServiceService} from '../Services/employee-service.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DeleteConfirmationComponent} from '../delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {
employeeList: Employee[];
  constructor(private db: EmployeeServiceService, private snackBar: MatSnackBar, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.employeeList = [];
    console.log('View employee list');
    this.db.employeeArray.subscribe(array => this.employeeList = array);
  }
  deleteEmployee = (employee: Employee) => {
    const ref = this.matDialog.open(DeleteConfirmationComponent);
    ref.afterClosed().subscribe(isDelete => {
      if (isDelete === 'true') {
        this.employeeList = this.db.deleteEmployee(employee.employeeID, this.employeeList);
        this.db.updateEmployeeList(this.employeeList);
        this.snackBar.open('Employee deleted', '', {duration: 1000});
      } else {
        console.log('Delete inside condition');
        this.snackBar.open('Employee not removed', '', {duration: 1000});
      }
    });
  }
}
