import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-loan-eligibility',
  standalone: true, // This is a standalone component
  templateUrl: './loan-eligibility.component.html',
  styleUrls: ['./loan-eligibility.component.css'],
  imports: [FormsModule, CommonModule] // Add FormsModule and CommonModule here
})
export class LoanEligibilityComponent {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number | undefined;
  annualIncome: number | undefined;
  debts: number | undefined;
  income: number | undefined;
  creditScore: number | undefined;
  loanAmount: number | undefined;
  eligibilityResult: string | undefined;

  // Injecting HttpClient
  constructor(private http: HttpClient) {}

  // Form submit method
  onSubmit() {
    const customerData = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      annualIncome: this.annualIncome,
      existingDebts: this.debts,
      income: this.income,
      creditScore: this.creditScore,
      loanAmount: this.loanAmount,
      employmentStatus: 'Employed', // You can add an employment status field if needed
    };

    // Sending POST request to backend
    this.http.post<any>('/api/loans/check-customer', customerData)
      .subscribe(response => {
        this.eligibilityResult = response;
      }, error => {
        this.eligibilityResult = 'Error occurred while checking eligibility.';
      });
  }
}
