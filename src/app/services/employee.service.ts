import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseUrl = environment.apiUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }


  public getListOfEmployees(): Observable<Array<IEmployee>>{
    const url = `${this.baseUrl}/employees`
    return this.httpClient.get<Array<IEmployee>>(url).pipe(
      map((employees) => {
         return employees;
      }),
      catchError(error => {
         return throwError(error);
      }),
    );
  }

  public addEmployee(employee: IEmployee): Observable<IEmployee>{
    const url = `${this.baseUrl}/employees`
    return this.httpClient.post<IEmployee>(url, employee).pipe(
      map((employee) => {
        return employee;
     }),
     catchError(error => {
        return throwError(error);
     }),
    );
  }

  public updateEmployeeByIndex(employee: IEmployee): Observable<IEmployee>{
    const url = `${this.baseUrl}/employees/${employee.id}`
    return this.httpClient.put<IEmployee>(url, employee).pipe(
      map((employee) => {
        return employee;
     }),
     catchError(error => {
        return throwError(error);
     }),
    );
  }

  public deleteEmployeeByIndex(id: number): Observable<IEmployee>{
    const url = `${this.baseUrl}/employees/${id}`
    return this.httpClient.delete<IEmployee>(url).pipe(
      map((employee) => {
        return employee;
     }),
     catchError(error => {
        return throwError(error);
     }),
    );

  }
}