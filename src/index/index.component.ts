import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <div class="body">
        <div class="split left">
            <div class="centered">
                <span>Paramount Marketing services is one of the top marketing firm in the world.</span>
            </div>
        </div>
        <div class="split right">
            <div class="centered">
                <app-login (isLoggedIn)="loggedIn()" ></app-login>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
@Output() isLoggedIn = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
loggedIn() {
    console.log('in index after logging in');
    this.isLoggedIn.emit(true);
}
}
