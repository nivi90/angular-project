import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { IEmployee } from  '../../models/employee';



@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent {
  @Input('displayList') displayedColumns: Array<string> = [];
  @Input('employeeList') employees: Array<IEmployee> = [];
  @Output() updateEmployee = new EventEmitter<IEmployee>();
  @Output() deleteEmployee = new EventEmitter<number>();

  constructor(
    private dialog: MatDialog,
  ){}


  public employeeInfo(employee: IEmployee): void{
    this.updateEmployee.emit(employee);
   }

   public deleteEmployeeById(event: MouseEvent ,employeeId: number): void{
     event.stopPropagation();
     this.openDialog(employeeId);
   }

  openDialog(employeeId: number) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
       width: '300px',
       height: '300px',
       data: employeeId
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteEmployee.emit(employeeId);
      }
    });
  }
}