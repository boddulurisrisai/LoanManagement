import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, // Standalone declaration
  imports: [RouterModule], // Import RouterModule for [routerLink]
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
