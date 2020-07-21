import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeServiceService} from '../Services/employee-service.service';
import {LocationService} from '../Services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @Output() isLoggedIn = new EventEmitter<boolean>();
  constructor(private employeeServiceService: EmployeeServiceService, locationService: LocationService, private router: Router) { }

  ngOnInit() {
  }
loggedIn = () => {
  this.employeeServiceService.isLoggedIn.emit(true);
  this.router.navigate(['HomePage']);
}
}
