package com.example.loanmanagement.controller;

import com.example.loanmanagement.entity.Customer;
import com.example.loanmanagement.service.LoanEligibilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/loans")
public class LoanEligibilityController {

    private final LoanEligibilityService loanEligibilityService;

    @Autowired
    public LoanEligibilityController(LoanEligibilityService loanEligibilityService) {
        this.loanEligibilityService = loanEligibilityService;
    }

    // Endpoint to check loan eligibility via POST request
    @PostMapping("/check-customer")
    public ResponseEntity<String> checkLoanEligibility(@RequestBody Customer customerRequest) {
        // Fetch customer from the database using firstName and lastName
        Optional<Customer> existingCustomer = loanEligibilityService.getCustomerByName(
                customerRequest.getFirstName(),
                customerRequest.getLastName()
        );

        if (existingCustomer.isPresent()) {
            // Use the details from the API request to perform the eligibility check
            boolean isEligible = loanEligibilityService.checkLoanEligibility(customerRequest);
            return ResponseEntity.ok(
                    isEligible ? "Customer is eligible for the loan." : "Customer is not eligible for the loan."
            );
        } else {
            // Customer not found in the database
            return ResponseEntity.status(404).body("Customer not found in the database.");
        }
    }


}
