import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Employee} from '../Classes/EmployeeClass/employee';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private employeeList;
  employeeListJson;
  employeeArray;
  private idSource = new BehaviorSubject(1);
  maxId = this.idSource.asObservable();
  constructor(http: HttpClient) {
    http.get('./assets/Json/EmployeeList.json')
      .subscribe(data => {this.employeeListJson = data as string[]; this.employeeList = new BehaviorSubject(this.getEmployeeList());
                          this.employeeArray = this.employeeList.asObservable(); console.log('service'); },
        (err: HttpErrorResponse) => {
          alert(err.message);
        });
  }
  getEmployeeList = () => {
    const tempArray: Employee[] = [];
    let tempId: number;
    for (const employee in this.employeeListJson) {
      if (!this.employeeListJson[employee].isDeleted) {
        tempArray.push(new Employee(
          this.employeeListJson[employee].employeeID,
          this.employeeListJson[employee].firstName,
          this.employeeListJson[employee].lastName,
          this.employeeListJson[employee].gender,
          this.employeeListJson[employee].state,
          this.employeeListJson[employee].city,
          new Date(this.employeeListJson[employee].startDate),
          new Date(this.employeeListJson[employee].endDate),
          this.employeeListJson[employee].CE,
          this.employeeListJson[employee].CS,
          this.employeeListJson[employee].CN,
        ));
        tempId = this.employeeListJson[employee].employeeID;
      }
      this.idSource.next(tempId);
    }
    return tempArray;
  }
  deleteEmployee = (employeeId: number, employeeList: Employee[]) => {
    employeeList = employeeList.filter(employee => employee.employeeID !== employeeId);
    return employeeList;
  }
  updateEmployeeList = (newEmployeeList: Employee[]) => {
    this.employeeList.next(newEmployeeList);
  }
}
