import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeServiceService } from './Services/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private employeeService: EmployeeServiceService) {
  employeeService.isLoggedIn.emit(false);
}
}
