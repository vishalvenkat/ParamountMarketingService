import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeServiceService } from '../Services/employee-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;
  imgSource = './assets/Images/Logo1.png';
  altForImage = 'Logo';
  constructor(private router: Router, private employeeService: EmployeeServiceService) {
  employeeService.isLoggedIn.subscribe((result: boolean) => this.isLoggedIn = result);
  }

  ngOnInit() {
  }
  workAfterLogin = () => {
    if (this.isLoggedIn) {
      this.router.navigate(['HomePage']);
    }
  }
}
