import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.list.component.html',
  styleUrls: ['./employees.list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'dob', 'department', 'gender'];
  data: Employee[] = [];
  isLoadingResults = true;

  constructor(private api: EmployeeService) {}

  ngOnInit() {
    this.api.getEmployees()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
