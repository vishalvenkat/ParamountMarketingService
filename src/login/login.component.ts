import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
  <mat-card fxFlex="25">
  <form>
      <mat-form-field>
          <input matInput placeholder="Username">
      </mat-form-field>
      <mat-form-field>
          <input matInput placeholder="Password" type="password">
      </mat-form-field>
  </form>
  </mat-card>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() isLoggedIn = new EventEmitter<boolean>();
userName: string;
password: string;
invalidCredentials = '';
  constructor() { }

  ngOnInit() {
  }

  login = () => {
    this.isLoggedIn.emit(true);
    if (this.userName === '' && this.password === '') {
      console.log('logged in successfully');
    } else {
      console.log('Invalid username or password');
      this.userName = '';
      this.password = '';
      this.invalidCredentials = 'Username or password is incorrect';
    }
  }
}
