import { Component } from '@angular/core';
import { LoanEligibilityService } from './loan-eligibility.service';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-loan-eligibility',
  templateUrl: './loan-eligibility.component.html',
  styleUrls: ['./loan-eligibility.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Add FormsModule to imports
})
export class LoanEligibilityComponent {
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  annualIncome: number = 0;
  creditScore: number = 0;
  existingDebt: number = 0;
  eligibilityMessage: string = '';

  constructor(private loanEligibilityService: LoanEligibilityService) {}

  // Method to handle form submission
  onSubmit(): void {
    const customerDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      annualIncome: this.annualIncome,
      creditScore: this.creditScore,
      existingDebt: this.existingDebt
    };

    this.loanEligibilityService.checkCustomerEligibility(customerDetails).subscribe(
      (response) => {
        this.eligibilityMessage = response; // Set eligibility message from backend response
      },
      (error) => {
        this.eligibilityMessage = 'Error: ' + error.message;
      }
    );
  }
}
