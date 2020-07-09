import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="background">
    <app-header></app-header>
    <app-index (isLoggedIn)="logIn()" *ngIf="!isLoggedIn"></app-index>
        <div *ngIf="isLoggedIn"><app-home-page></app-home-page></div>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParamountMarketingService';
isLoggedIn = false;
logIn() {
  this.isLoggedIn = true;
}
}
