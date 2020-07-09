import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
        <mat-card-header>
        <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <table>
                    <tr>
                        <td>
                            <mat-form-field>
                                <input placeholder="Enter username" [(ngModel)] = "userName" name = "userName" matInput required>
                            </mat-form-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <mat-form-field>
                                <input type = "password" placeholder="Enter password" [(ngModel)] = "password"
                                       name = "password" matInput required>
                            </mat-form-field>
                        </td>
                    </tr>
                </table>
            </form>
        </mat-card-content>
        {{invalidCredentials}}
        <mat-card-actions>
            <button mat-raised-button (click)="login()">Login</button>
        </mat-card-actions>
    </mat-card>
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

  login() {
    if (this.userName === 'admin' && this.password === 'admin') {
      console.log('logged in successfully');
      this.isLoggedIn.emit(true);
    } else {
      console.log('Invalid username or password');
      this.userName = '';
      this.password = '';
      this.invalidCredentials = 'Username or password is incorrect';
    }
  }
}
