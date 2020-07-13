import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="background">
        <h3>Paramount Marketing services is one of the top marketing firm in the world.</h3>
    </div>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
