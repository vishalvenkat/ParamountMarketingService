import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-add-new-employee',
  template: `
      <h1>Add employee details</h1>
      <form class="example-form">
          <table class="example-full-width">
              <tr>
                  <td>
                      Choose gender: <br/>
                      <div class="radioStyle">
                          <input id="Male" type="radio" name="Gender" value="Male"  [(ngModel)]="gender"/>
                          <label class="gender male" for="Male"></label>
                          <input id="Female" type="radio" name="Gender" value="Female" [(ngModel)]="gender"/>
                          <label class="gender female" for="Female"></label>
                      </div>
                  </td>
              </tr>
              <tr>
                  <td>
                      <mat-form-field class="example-full-width">
                          <mat-label>First name</mat-label>
                          <input matInput [(ngModel)]="firstName" name="firstName">
                      </mat-form-field>
                  </td>
                  <td>
                      <mat-form-field class="example-full-width">
                          <mat-label>Last Name</mat-label>
                          <input matInput [(ngModel)]="lastName" name="lastName">
                      </mat-form-field>
                  </td>
              </tr>
              <tr>
                  <td>
                      <mat-form-field class="example-full-width">
                          <input type="text"
                                 placeholder="select state"
                                 matInput
                                 [formControl]="myControl"
                                 [matAutocomplete]="auto1"
                          [(ngModel)]="state" name="state">
                          <mat-autocomplete autoActiveFirstOption #auto1="matAutocomplete">
                              <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
                                  {{option}}
                              </mat-option>
                          </mat-autocomplete>
                      </mat-form-field>
                  </td>
                  <td>
                      <mat-form-field class="example-full-width">
                          <input type="text"
                                 placeholder="Choose city"
                                 matInput
                                 [formControl]="myControl1"
                                 [matAutocomplete]="auto"
                          [(ngModel)]="city"  name="city">
                          <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
                              <mat-option *ngFor="let city of cityOptions | async" [value]="city">
                                  {{city}}
                              </mat-option>
                          </mat-autocomplete>
                      </mat-form-field>
                  </td>
              </tr>
              <tr>
                  <td>
                      <mat-form-field>
                          <mat-label>Choose start date</mat-label>
                          <input matInput [matDatepicker]="startDate" [(ngModel)]="startDate1" name="startDate">
                          <mat-datepicker-toggle matSuffix [for]="startDate"></mat-datepicker-toggle>
                          <mat-datepicker #startDate></mat-datepicker>
                      </mat-form-field>
                  </td>
                  <td>
                      <mat-form-field>
                          <mat-label>Choose end date</mat-label>
                          <input matInput [matDatepicker]="endDate" [(ngModel)]="endDate1" name="endDate">
                          <mat-datepicker-toggle matSuffix [for]="endDate"></mat-datepicker-toggle>
                          <mat-datepicker #endDate></mat-datepicker>
                      </mat-form-field>
                  </td>
              </tr>
              <tr>
                  <td>
                      CS:
                      <mat-slider
                              thumbLabel
                              tickInterval="10"
                              min="1"
                              max="1000"
                      [(ngModel)]="CS" name="CS">
                      </mat-slider>
                  </td>
                  <td>
                      CN:
                  <mat-slider
                          thumbLabel
                          tickInterval="10"
                          min="1"
                          max="1000"
                  [(ngModel)]="CN" name="CN">
                  </mat-slider>
                  </td>
                  <td>
                      CE:
                      <mat-slider
                              thumbLabel
                              tickInterval="10"
                              min="1"
                              max="1000"
                      [(ngModel)]="CE" name="CE">
                      </mat-slider>
                  </td>
              </tr>
              <tr>
                  <td>
                      <button mat-raised-button (click)="addEmployee()">Add employee</button>
                  </td>
              </tr>
          </table>
      </form>
  `,
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  endDate1: Date;
  startDate1: Date;
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  CE: number;
  CS: number;
  CN: number;
  gender: string;
  myControl = new FormControl();
  myControl1 = new FormControl();
  cities: string[] = ['Chennai', 'Madurai'];
  options: string[] = ['Tamil Nadu', 'Maharastra'];
  filteredOptions: Observable<string[]>;
  cityOptions: Observable<string[]>;
  constructor() {
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.options))
    );
    this.cityOptions = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.cities))
    );
  }
  private _filter(value: string, optionsAvailable: string[]) {
    const filterValue = value.toLowerCase();
    return optionsAvailable.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  addEmployee() {
    console.log(this.firstName);
    console.log(this.state);
    console.log(this.endDate1);
    console.log(this.CE);
    console.log(this.gender);
  }
}
