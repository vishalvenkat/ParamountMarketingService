import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="background">
    <app-header [isLoggedIn]="isLoggedIn"></app-header>
        <div *ngIf="!isLoggedIn">
    <app-index (isLoggedIn)="login()"></app-index>
        </div>
    <div *ngIf="isLoggedIn"><app-home-page></app-home-page></div>
    </div>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParamountMarketingService';
isLoggedIn = false;
login() {
  this.isLoggedIn = true;
}
}
