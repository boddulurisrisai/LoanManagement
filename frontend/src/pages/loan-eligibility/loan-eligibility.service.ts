import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanEligibilityService {

  private apiUrl = 'http://localhost:8080/api/loans/check-customer'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Method to check customer eligibility
  checkCustomerEligibility(customerDetails: any): Observable<string> {
    const params = new URLSearchParams(customerDetails).toString();
    return this.http.get<string>(`${this.apiUrl}?${params}`);
  }
}
