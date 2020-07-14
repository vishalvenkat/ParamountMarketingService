import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {AddNewEmployeeComponent} from '../add-new-employee/add-new-employee.component';
import {ViewEmployeeListComponent} from '../view-employee-list/view-employee-list.component';
import {HomePageComponent} from '../home-page/home-page.component';

const routes: Routes = [
  {path: 'AddNewEmployee', component: AddNewEmployeeComponent},
  {path: 'ViewEmployees', component: ViewEmployeeListComponent},
  {path: 'HomePage', component: HomePageComponent}
];
const componentsRouted = [
  AddNewEmployeeComponent,
  ViewEmployeeListComponent
];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)]
})
export class RoutingModule { }
export const RouteComponents = componentsRouted;
