import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  template: `
    <div>
  <mat-card style="padding: 0px">
      <mat-toolbar color="primary">Login</mat-toolbar>
  <form fxLayout="column" style="padding: 20px">
      <mat-form-field>
          <input matInput placeholder="Username" name="userName" [(ngModel)]="userName" required>
      </mat-form-field>
      <mat-form-field>
          <mat-label>Password</mat-label>
          <input matInput [type]="hide ? 'password' : 'text'" name="password" [(ngModel)]="password" required>
          <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
          </button>
      </mat-form-field>
      <button mat-raised-button type="submit" color="primary" (click)="login()" matTooltip="Login" [matTooltipPosition] = "right">Login</button>
  </form>
  </mat-card>
    </div>
  `,
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
