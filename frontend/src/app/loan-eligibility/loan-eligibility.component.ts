  import { Component } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

  @Component({
    selector: 'app-loan-eligibility',
    standalone: true,
    templateUrl: './loan-eligibility.component.html',
    styleUrls: ['./loan-eligibility.component.css'],
    imports: [FormsModule, CommonModule, HttpClientModule], // Add HttpClientModule here
  })
  export class LoanEligibilityComponent {
    // Form data
    firstName = '';
    lastName = '';
    age: number | undefined;
    annualIncome: number | undefined;
    debts: number | undefined;
    income: number | undefined;
    creditScore: number | undefined;
    isEmployed = false; // Checkbox default
    eligibilityResult: string | undefined;

    // Inject HttpClient
    constructor(private http: HttpClient) {}

    // Submit form
    onSubmit() {
      // Map the employment status
      const employmentStatus = this.isEmployed ? 'Employed' : 'Unemployed';

      // Prepare the customer data
      const customerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        annualIncome: this.annualIncome,
        creditScore: this.creditScore,
        existingDebts: this.debts,
        employmentStatus: employmentStatus,
      };
      console.log('Sending customer data:', customerData);
      // Send POST request to backend
      this.http.post<any>('http://localhost:8080/api/loans/check-customer', customerData).subscribe(
        (response) => {
          console.log('Response received:', response);
          this.eligibilityResult = response;
        },
        (error) => {
          console.error('Error occurred:', error);
          this.eligibilityResult = 'Error occurred while checking eligibility.';
        }
      );
    }
  }
