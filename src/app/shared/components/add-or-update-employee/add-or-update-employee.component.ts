import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  public employeeLength: number = 0;
  public employeeForm: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddOrUpdateEmployeeComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createEmployeeFrom();
    if (this.data && this.data.employee) {
      this.employeeForm.setValue({
        name: this.data.employee.name,
        age: this.data.employee.age,
        salary: this.data.employee.salary,
        position: this.data.employee.position,
        country: this.data.employee.country
      });
    } else {
      this.employeeLength = this.data.employeeLength;
      this.isCreation = this.data.iscreated;
    }
    console.log('the form of employee', this.employeeForm);

    this.employeeForm.valueChanges.subscribe(res => {
      console.log('the form of employee inside', this.employeeForm);

    });
  }

  createEmployeeFrom() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      age: [1, [Validators.required, Validators.min(1), Validators.max(80)]],
      salary: [15000, [Validators.required, Validators.min(15000), Validators.max(1000000)]],
      position: [this.positions[0], [Validators.required]],
      country: [this.countries[0], [Validators.required]]
    });

  }

  updateEmployee() {
    const employee: IEmployee = {
      id: this.isCreation ? this.employeeLength + 1 : this.data.employee.id,
      name: this.employeeForm.value.name,
      age: this.employeeForm.value.age,
      salary: this.employeeForm.value.salary,
      position: this.employeeForm.value.position,
      country: this.employeeForm.value.country
    }
    this.dialogRef.close(employee);
  }

}
