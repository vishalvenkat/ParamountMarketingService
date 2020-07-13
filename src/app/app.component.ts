import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="background1">
    <app-header [isLoggedIn]="isLoggedIn"></app-header>
        <div *ngIf="!isLoggedIn">
    <app-index (isLoggedIn)="login()"></app-index>
        </div>
    </div>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isLoggedIn = false;
constructor(private router: Router) {
}
login = () => {
  this.isLoggedIn = true;
  this.router.navigate(['HomePage']);
}
}
