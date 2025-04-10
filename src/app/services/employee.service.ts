import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/enviroment';
import { EmployeeData } from '../models/employeeData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SentEmployeeData } from '../models/sentEmployeeData';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  private url: string = environment.api_url;
  http: HttpClient = inject(HttpClient);

  getEmployees(): Observable<EmployeeData[]> {
    return this.http.get<EmployeeData[]>(this.url + '/employees');
  }

  getEmployeeById(id: string): Observable<EmployeeData> {
    return this.http.get<EmployeeData>(this.url + '/employees/' + id);
  }

  createEmployee(employee: SentEmployeeData): Observable<EmployeeData> {
    return this.http.post<EmployeeData>(this.url + '/employees', employee);
  }

  updateEmployee(
    id: string,
    employee: SentEmployeeData
  ): Observable<EmployeeData> {
    return this.http.put<EmployeeData>(this.url + '/employees/' + id, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.url + '/employees/' + id);
  }
}
