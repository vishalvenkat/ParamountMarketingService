import { Component, Input, OnInit} from '@angular/core';
import {Employee} from '../Classes/EmployeeClass/employee';

@Component({
  selector: 'app-card-view',
  template: `
    <table>
        <tr>
            <td>
                <app-cards [firstName]="employeeList[0].firstName" [lastName]="employeeList[0].lastName"
                           [location]="employeeList[0].state" [CRR]="employeeList[0].CRR"></app-cards>
            </td>
            <td>
                <app-cards [firstName]="employeeList[1].firstName" [lastName]="employeeList[1].lastName"
                           [location]="employeeList[1].state" [CRR]="employeeList[1].CRR"></app-cards>
            </td>
        </tr>
    </table>
  `,
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() employeeList: Employee[];
  constructor() {
    }

  ngOnInit() {
   }
}
