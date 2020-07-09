import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <mat-toolbar>
          <div><img [src]="imgSource" [alt]="altForImage" /> </div>
          <div>Paramount Marketing services</div>
          <div>
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          </div>
      </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
imgSource = './assets/Images/Logo.PNG';
altForImage = 'Logo';
  constructor() { }

  ngOnInit() {
  }

}
