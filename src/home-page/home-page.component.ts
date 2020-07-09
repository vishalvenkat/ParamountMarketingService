import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div *ngIf="homePage">
      <table>
          <th>Paramount Marketing services is one of the top marketing firm in the world.</th>
          <tr>
              <td>
                  <button mat-raised-button routerLink="/AddNewEmployee" (click)="homePage = !homePage">Add new employee</button>
              </td>
          </tr>
          <tr>
              <td>
                  <button mat-raised-button routerLink="/ViewEmployees" (click)="homePage = !homePage">View existing employees</button>
              </td>
          </tr>
      </table>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
homePage = true;
  constructor() { }

  ngOnInit() {
  }

}
