import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  template: `
      <mat-toolbar color="primary">
          <div><img [src]="imgSource" [alt]="altForImage" /></div>
          <div>
              <button mat-button (click)="workAfterLogin()">Paramount Marketing services</button>
          </div>
          <div>
          <span>About</span>
          </div>
          <div *ngIf="isLoggedIn">
              <button mat-button routerLink="/AddNewEmployee" matTooltip="Add new Employee">Add New Employee</button>
              <button mat-button routerLink="/ViewEmployees" matTooltip="View current working employees">View Employee details</button>
          </div>
      </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
imgSource = './assets/Images/Logo.PNG';
altForImage = 'Logo';
  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
  }
  workAfterLogin() {
    if (this.isLoggedIn) {
      this.router.navigate(['HomePage']);
    }
  }
}
