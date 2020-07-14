import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeServiceService} from '../Services/employee-service.service';
import {LocationService} from '../Services/location.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @Output() isLoggedIn = new EventEmitter<boolean>();
  constructor(employeeServiceService: EmployeeServiceService, locationService: LocationService) { }

  ngOnInit() {
  }
loggedIn = () => {
  this.isLoggedIn.emit(true);
}
}
