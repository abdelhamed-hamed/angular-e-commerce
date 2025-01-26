import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { ProductsImageComponent } from './products-image/products-image.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [DetailsComponent, ProductsImageComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
