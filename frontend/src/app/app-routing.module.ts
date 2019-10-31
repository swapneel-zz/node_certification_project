import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/list/employees.list.component';
import { EmployeeAddComponent } from './employees/add/employee-add.component';
import { EmployeeEditComponent } from './employees/edit/employee-edit.component';
import { EmployeeDetailComponent } from './employees/details/employee-detail.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesListComponent,
    data: { title: 'List of Employees' }
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Employee Details' }
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
    data: { title: 'Add Employee' }
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { title: 'Edit Employee' }
  },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
