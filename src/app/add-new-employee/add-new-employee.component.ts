import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeServiceService} from '../Services/employee-service.service';
import {Employee} from '../../Classes/EmployeeClass/employee';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {LocationService} from '../Services/location.service';
@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  stateList: string[] = [];
  cityList: string[] = [];
  minDate: Date;
  maxDate: Date;
  private maxId: number;
  private employeeList: Employee[];
  constructor(private employeeService: EmployeeServiceService, private snackBar: MatSnackBar, private router: Router,
              private locationService: LocationService) {this.stateList = this.locationService.getStateList(); }
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    CE: new FormControl('', [Validators.max(10000), Validators.min(1), Validators.required, Validators.pattern('[0-9]*')]),
    CS: new FormControl('', [Validators.max(10000), Validators.min(1), Validators.required, Validators.pattern('[0-9]*')]),
    CN: new FormControl('', [Validators.max(10000), Validators.min(1), Validators.required, Validators.pattern('[0-9]*')])
  });

  ngOnInit(): void {
  }
  addNewEmployee = () => {
      this.employeeService.maxId.subscribe(array => this.maxId = array);
      this.employeeService.updateMaxId(this.maxId + 1);
      const newEmployee = new Employee(this.maxId, this.form.get('firstName').value, this.form.get('lastName').value,
        this.form.get('gender').value, this.form.get('state').value, this.form.get('city').value,
        new Date(this.form.get('startDate').value), new Date(this.form.get('endDate').value),
        this.form.get('CE').value, this.form.get('CN').value, this.form.get('CS').value);
      this.employeeService.employeeArray.subscribe(array => this.employeeList = array);
      this.employeeList.push(newEmployee);
      this.employeeService.updateEmployeeList(this.employeeList);
      this.snackBar.open('Employee added successfully', '', {duration: 1000});
      this.form.reset();
      this.router.navigate(['HomePage']);
  }
  updateCity = () => {
    this.cityList = this.locationService.getCityList(this.form.get('state').value);
  }
  setMinDate = () => {
    this.minDate = new Date(this.form.get('startDate').value);
  }
  setMaxDate = () => {
    this.maxDate = new Date(this.form.get('endDate').value);
  }
}
