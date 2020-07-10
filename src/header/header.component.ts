import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <mat-toolbar>
          <div><img [src]="imgSource" [alt]="altForImage" /> </div>
          <div>Paramount Marketing services</div>
          <div>
          <span>About</span>
          </div>
          <div *ngIf="isLoggedIn">
              <button mat-button routerLink="/AddNewEmployee">Add New Employee</button>
              <button mat-button routerLink="/ViewEmployees">View Employee details</button>
          </div>
      </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
imgSource = './assets/Images/Logo.PNG';
altForImage = 'Logo';
  constructor() {
    this.isLoggedIn = false;
  }

  ngOnInit() {
  }

}
