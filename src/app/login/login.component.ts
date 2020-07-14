import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() isLoggedIn = new EventEmitter<boolean>();
right = 'right';
userName: string;
password: string;
hide = true;
invalidCredentials = '';
  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login = () => {
    this.isLoggedIn.emit(true);
    if (this.userName === 'admin' && this.password === 'admin') {
      this.matSnackBar.open('logged in successfully', '', {duration: 1000});
    } else {
      this.matSnackBar.open('Username or password is incorrect', '', {duration: 1000});
      this.userName = '';
      this.password = '';
      this.invalidCredentials = 'Username or password is incorrect';
    }
  }
}
