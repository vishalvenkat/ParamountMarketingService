import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeServiceService} from '../Services/employee-service.service';
import {Employee} from '../Classes/EmployeeClass/employee';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-new-employee',
  template: `
    <mat-card>
      <div class="container background">
          <form [formGroup]="form" class="normal-form">
              <div class="radioStyle">
                  <input id="Male" type="radio"  value="Male"  formControlName="gender"/>
                  <label class="gender male" for="Male"></label>
                  <input id="Female" type="radio" value="Female" formControlName="gender"/>
                  <label class="gender female" for="Female"></label>
              </div>
              <mat-grid-list cols="2" rowHeight="300px">
                  <mat-grid-tile>
                      <div class="controller-container">
                          <mat-form-field>
                              <input matInput formControlName="firstName" placeholder="First Name">
                              <mat-error>Enter name</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <mat-select formControlName="state" placeholder="Choose state">
                                  <ng-container *ngFor="let stateOptions of stateList">
                                      <mat-option value="stateOptions">{{stateOptions}}</mat-option>
                                  </ng-container>
                              </mat-select>
                              <mat-error>choose state</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <input formControlName="startDate" matInput [matDatepicker]="startDatePicker" placeholder="Start date">
                              <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
                              <mat-datepicker #startDatePicker></mat-datepicker>
                              <mat-error>Pick start Date</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <input matInput formControlName="CE" placeholder="CE" type="number">
                              <mat-error>Enter number</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <input matInput formControlName="CS" placeholder="CS" type="number">
                              <mat-error>Enter number</mat-error>
                          </mat-form-field>
                      </div>
                  </mat-grid-tile>
                  <mat-grid-tile>
                      <div class="controller-container">
                          <mat-form-field>
                              <input matInput formControlName="lastName" placeholder="Last Name">
                              <mat-error>Enter name</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <mat-select formControlName="city" placeholder="Choose city">
                                  <ng-container *ngFor="let cityOptions of cityList">
                                      <mat-option value="cityOptions">{{cityOptions}}</mat-option>
                                  </ng-container>
                              </mat-select>
                              <mat-error>choose city</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <input formControlName="endDate" matInput [matDatepicker]="endDatePicker" placeholder="Start date">
                              <mat-datepicker-toggle matSuffix [for]="endDatePicker"></mat-datepicker-toggle>
                              <mat-datepicker #endDatePicker></mat-datepicker>
                              <mat-error>Pick end date</mat-error>
                          </mat-form-field>
                          <mat-form-field>
                              <input matInput formControlName="CN" placeholder="CN" type="number">
                              <mat-error>Enter number</mat-error>
                          </mat-form-field>
                          <button mat-raised-button type="submit" color="primary" [disabled]="form.invalid" matTooltip="Add employee" (click)="addNewEmployee()">Add Employee</button>
                      </div>
                  </mat-grid-tile></mat-grid-list>
          </form>
      </div>
    </mat-card>
  `,
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  stateList: string[] = ['Tamil Nadu', 'Maharastra'];
  cityList: string[] = ['Chennai', 'Coimbatore', 'Madurai', 'Kanchipuram', 'Madurai', 'Tanjore', 'Mumbai', 'Nagpur', 'Pune', 'Kolad'];
  private maxId: number;
  private employeeList: Employee[];
  constructor(private employeeService: EmployeeServiceService, private snackBar: MatSnackBar, private router: Router) { }
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    CE: new FormControl('', Validators.required),
    CS: new FormControl('', Validators.required),
    CN: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }
  addNewEmployee = () => {
    console.log('CE' + this.form.get('CE').value);
    this.employeeService.maxId.subscribe(array => this.maxId = array);
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
}
