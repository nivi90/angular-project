import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ListOfEmployeesComponent } from './components/list-of-employees/list-of-employees.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { AddOrUpdateEmployeeComponent } from './components/add-or-update-employee/add-or-update-employee.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddOrUpdateEmployeeComponent,
    DeleteConfirmationComponent,
    ListOfEmployeesComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    AddOrUpdateEmployeeComponent,
    DeleteConfirmationComponent,
    ListOfEmployeesComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ]
})
export class SharedModule { }
