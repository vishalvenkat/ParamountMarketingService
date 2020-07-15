import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
