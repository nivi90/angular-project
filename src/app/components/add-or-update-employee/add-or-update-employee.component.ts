import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from '../../models/employee';


@Component({
  selector: 'app-add-or-update-employee',
  templateUrl: './add-or-update-employee.component.html',
  styleUrls: ['./add-or-update-employee.component.scss']
})
export class AddOrUpdateEmployeeComponent implements OnInit {

  public isCreation: boolean = false;
  public positions: Array<String> = ['Web Developer', 'software Engineer', 'Software Developer',
    'Front End Developer', 'Network Engineer', 'senior manager'];
  public countries: Array<String> = ['Italy', 'Spain', 'France', 'Australia', 'Greece', 'Portugal', 'USA', 'Brazil', 'india'];

  public name: string = '';
  public age: number = 0;
  public salary: number = 0;
  public position: string = '';
  public country: string = '';
  public employeeLength: number = 0;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddOrUpdateEmployeeComponent>)
    {}

  ngOnInit(): void {
    if (this.data && this.data.employee) {
      this.name = this.data.employee.name;
      this.age = this.data.employee.age;
      this.salary = this.data.employee.salary;
      this.position = this.data.employee.position;
      this.country = this.data.employee.country;
    } else {
        this.employeeLength = this.data.employeeLength;
        this.isCreation = this.data.iscreated;
    }
  }

  updateEmployee() {
    const employee: IEmployee = {
      id: this.isCreation ? this.employeeLength + 1 : this.data.employee.id,
      name: this.name,
      age: this.age,
      salary: this.salary,
      position: this.position,
      country: this.country
    }
    this.dialogRef.close(employee);
  }

}