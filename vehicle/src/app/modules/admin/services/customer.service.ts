import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL=["http://localhost:8001"];
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token') // Ensure token is stored in localStorage
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  postCustomer(customer: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/api/customer`, customer);
  }

  getAllCustomer(): Observable<any> {
    return this.http.get(`${BASIC_URL}/api/customers`,httpOptions);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${BASIC_URL}/api/customer/${id}`);
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put(`${BASIC_URL}/api/customer/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${BASIC_URL}/api/customer/${id}`);
  }
}



