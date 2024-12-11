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

    // Endpoint to check customer existence by first name and last name
    @GetMapping("/check-customer")
    public ResponseEntity<String> checkCustomerExistence(@RequestParam String firstName, @RequestParam String lastName) {
        System.out.println("Received request to check customer with firstName: " + firstName + " and lastName: " + lastName);

        Optional<Customer> customerOpt = loanEligibilityService.getCustomerByName(firstName, lastName);

        if (customerOpt.isPresent()) {
            System.out.println("Customer " + firstName + " " + lastName + " found in the database."); // Customer found in the database
            Customer customer = customerOpt.get();
            boolean isEligible = loanEligibilityService.checkLoanEligibility(customer);
            return ResponseEntity.ok("Customer is " + (isEligible ? "eligible" : "not eligible") + " for the loan.");
        } else {
            System.out.println("Customer " + firstName + " " + lastName + " not found in the database."); // Customer not found
            return ResponseEntity.status(404).body("Customer not found. Not a member.");
        }
    }
}
