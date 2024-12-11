import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';  // AppComponent will be imported directly in the bootstrap
import { LoanEligibilityComponent } from '../pages/loan-eligibility/loan-eligibility.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,            // Import AppComponent here for bootstrapping
    LoanEligibilityComponent // Import LoanEligibilityComponent here for usage in the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
