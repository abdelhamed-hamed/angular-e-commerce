import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { ServicesComponent } from '../services-arrive/services.component';
import { TopSalesComponent } from '../top-sales/top-sales.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingComponent,
    ServicesComponent,
    TopSalesComponent,
    BlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
