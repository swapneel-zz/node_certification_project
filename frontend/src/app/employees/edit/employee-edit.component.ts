import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;
  _id:string='';
  name:string='';
  email:string='';
  dob:string=null;
  department:string=null;
  gender:string=null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params['id']);
    this.employeeForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'dob' : [null, Validators.required],
      'department' : [null, Validators.required],
      'gender' : [null, Validators.required]
    });
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe(data => {
      this._id = data._id;
      this.employeeForm.setValue({
        name: data.name,
        email: data.email,
        dob: data.dob,
        department: data.department,
        gender: data.gender
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateEmployee(this._id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          if (id) {
            this.router.navigate(['/employee-details', id]);
          }
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  employeeDetails() {
    this.router.navigate(['/employee-details', this._id]);
  }

}
