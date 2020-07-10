import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';

@Component({
  selector: 'app-card-view',
  template: ``,
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() employeeList: Employee[];
  constructor() { }

  ngOnInit() {
  }

}
