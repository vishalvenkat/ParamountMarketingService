import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeServiceService} from '../Services/employee-service.service';

@Component({
  selector: 'app-index',
  template: `
    <div class="body">
        <div class="split left">
            <div class="centered">
                <span>Paramount Marketing services is one of the top marketing firm in the world.</span>
            </div>
        </div>
        <div class="split right">
            <div class="centered">
                <app-login (isLoggedIn)="loggedIn()" ></app-login>
            </div>
        </div>
    </div>
    <div *ngIf = "isLoggedIn"></div>
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
