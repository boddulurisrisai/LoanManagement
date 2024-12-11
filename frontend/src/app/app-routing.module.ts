// src/app/app-routing.module.ts (or wherever you define routes)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanEligibilityComponent } from '../pages/loan-eligibility/loan-eligibility.component'; // correct the path if needed

const routes: Routes = [
  { path: 'loan-eligibility', component: LoanEligibilityComponent },  // Add route for LoanEligibilityComponent
  { path: '', redirectTo: '/loan-eligibility', pathMatch: 'full' },   // Default route redirects to loan-eligibility
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use RouterModule to configure routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
