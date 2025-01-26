import { Component, input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../../../shared/shared.module';
import { Products } from '../../../shared/interfaces/products.interface';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, NgxPaginationModule, SpinnerComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  products = input<Array<Products>>([]);
  error = input<string>();

  // Cart Icons
  icons = [
    {
      icon: 'fa-solid fa-cart-plus',
      routerLink: 'sdsdsd',
    },

    {
      icon: 'fa-regular fa-eye',
      routerLink: 'sdsdsd',
    },

    {
      icon: 'fa-solid fa-heart',
      routerLink: 'sdsd',
    },
  ];

  // Page Number
  p: number = 1;
}
