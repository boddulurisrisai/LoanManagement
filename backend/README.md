# Loan Management System

## Overview

This project is a Loan Management System that helps manage customer loan applications and eligibility checks. The frontend is developed using Angular 14, TypeScript, HTML, CSS, and Node.js, while the backend is powered by Java Spring Boot and Maven, with a MySQL database.

## Features

- Customer loan application form
- Loan eligibility check
- Responsive UI
- Error handling and validation
- RESTful API integration

## Technologies Used

### Frontend

- **Angular 14**
- **TypeScript**
- **HTML**
- **CSS**
- **Node.js**

### Backend

- **Java Spring Boot**
- **Maven**
- **MySQL Database**

### Tools

- **Postman** (for API testing and debugging)

## Setup and Installation

### Prerequisites

- Node.js (latest version recommended)
- Angular CLI
- Java JDK (latest version recommended)
- Maven
- MySQL Server

### Frontend

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repository-url/loan-management-system.git
    ```

2. **Navigate to the frontend directory:**
    ```bash
    cd loan-management-system/frontend
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Run the Angular application:**
    ```bash
    ng serve
    ```

5. **Open your browser and navigate to:**
    ```
    http://localhost:4200
    ```

### Backend

1. **Navigate to the backend directory:**
    ```bash
    cd loan-management-system/backend
    ```

2. **Install Maven dependencies:**
    ```bash
    mvn clean install
    ```

3. **Configure the MySQL database:**
    - Create a new database named `loan_management`.
    - Update the `application.properties` file with your MySQL database credentials.

4. **Run the Spring Boot application:**
    ```bash
    mvn spring-boot:run
    ```

5. **The backend will be available at:**
    ```
    http://localhost:8080
    ```

## API Endpoints

### Check Customer Eligibility

- **URL:** `/api/loans/check-customer`
- **Method:** `POST`
- **Description:** Checks the loan eligibility of a customer.
- **Request Body:**
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 30,
        "annualIncome": 75000,
        "creditScore": 700,
        "existingDebts": 10000,
        "employmentStatus": "Employed"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Eligible for loan."
    }
    ```

## Testing

Use Postman to test the API endpoints. Import the API collection provided in the `postman_collection.json` file (if available).

