import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
imgSource = './assets/Images/Logo1.png';
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
  asd() {
    console.log('asd');
  }
}
