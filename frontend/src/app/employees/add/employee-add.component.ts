import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;
  name:string='';
  email:string='';
  dob:string=null;
  department:string=null;
  gender:string='male';
  isLoadingResults = false;

  constructor(private router: Router, private api: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'dob' : [null, Validators.required],
      'department' : [null, Validators.required],
      'gender' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addEmployee(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          if (id) {
            this.router.navigate(['/employee-details', id]);
          }
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
