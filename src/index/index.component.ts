import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeServiceService} from '../Services/employee-service.service';

@Component({
  selector: 'app-index',
  template: `
    <div class="background1">
    <mat-grid-list cols="2" rowHeight="1.15:1">
        <mat-grid-tile>
            <span>Paramount Marketing services is one of the top marketing firm in the world.</span>
        </mat-grid-tile>
        <mat-grid-tile><app-login (isLoggedIn)="loggedIn()" ></app-login></mat-grid-tile>
    </mat-grid-list></div>
  `,
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @Output() isLoggedIn = new EventEmitter<boolean>();
  constructor(employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {
  }
loggedIn = () => {
  this.isLoggedIn.emit(true);
}
}
