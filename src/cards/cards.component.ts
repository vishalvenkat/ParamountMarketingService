import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
  <mat-card>
      <mat-card-header>
          <mat-card-title>{{firstName}}</mat-card-title>
          <mat-card-subtitle>{{lastName}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
          <p>{{location}}</p>
          <p>{{CRR}}</p>
      </mat-card-content>
  </mat-card>
  `,
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() location: string;
  @Input() CRR: number;
  constructor() { }

  ngOnInit() {
  }

}
