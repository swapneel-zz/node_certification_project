import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AgePipe } from './age.pipe';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatNativeDateModule,
  MatDatepickerModule
} from "@angular/material";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees/list/employees.list.component';
import { EmployeeAddComponent } from './employees/add/employee-add.component';
import { EmployeeEditComponent } from './employees/edit/employee-edit.component';
import { EmployeeDetailComponent } from './employees/details/employee-detail.component';

@NgModule({
  declarations: [
    AgePipe,
    AppComponent,
    EmployeesListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    AgePipe,
    EmployeesListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
