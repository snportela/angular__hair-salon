import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/enviroment';
import { Observable } from 'rxjs';
import { CustomerData } from '../models/customerData';
import { SentCustomerData } from '../models/sentCustomerData';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url: string = environment.api_url;

  http: HttpClient = inject(HttpClient);

  getCustomers(): Observable<CustomerData[]> {
    return this.http.get<CustomerData[]>(this.url + '/customers');
  }

  getCustomerById(id: string): Observable<CustomerData> {
    return this.http.get<CustomerData>(this.url + '/customers/' + id);
  }

  createCustomer(customer: SentCustomerData): Observable<CustomerData> {
    return this.http.post<CustomerData>(this.url + '/customers', customer);
  }

  updateCustomer(
    id: string,
    customer: SentCustomerData
  ): Observable<CustomerData> {
    return this.http.put<CustomerData>(this.url + '/customers/' + id, customer);
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.url + '/customers/' + id);
  }
}
