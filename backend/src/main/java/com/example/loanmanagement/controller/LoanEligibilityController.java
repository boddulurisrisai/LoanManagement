package com.example.loanmanagement.controller;

import com.example.loanmanagement.entity.Customer;
import com.example.loanmanagement.service.LoanEligibilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> checkLoanEligibility(@RequestBody Customer customer) {
        // Checking loan eligibility
        boolean isEligible = loanEligibilityService.checkLoanEligibility(customer);

        // Return eligibility result
        if (isEligible) {
            return ResponseEntity.ok("Customer is eligible for the loan.");
        } else {
            return ResponseEntity.ok("Customer is not eligible for the loan.");
        }
    }
}
