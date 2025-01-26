import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';
import { CartComponent } from '../top-sales/cart/cart.component';
import { Products } from '../../shared/interfaces/products.interface';
import { AllProductsService } from '../../services/all-products.service';
import { Subscription } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { filterPriceService } from '../../services/filter-price.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, TitleComponent, CartComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  allProducts: any[] = [];
  error?: string;

  minPrice = [50, 100, 150, 200, 250];

  maxPrice = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
    800, 850, 900, 950, 1000,
  ];

  constructor(
    private topSales: AllProductsService,
    private filterPrice: filterPriceService,
    private spinner: NgxSpinnerService
  ) {
    this.getTopSales();
  }
  getTopSales(): Subscription {
    this.spinner.show();
    return this.topSales.getProducts().subscribe({
      next: (data: Products) => {
        this.allProducts.push(data);
        this.allProducts = [this.allProducts[0]];
      },
      error: (error) => (this.error = error.message),
      complete: () => this.spinner.hide(),
    });
  }
  filterProducts(min: number, max: number): Subscription {
    this.spinner.show();
    return this.filterPrice.filterPrice(min, max).subscribe({
      next: async (data: Products) => {
        this.allProducts = [];
        this.allProducts.push(data);
        this.allProducts = [this.allProducts[0]];
      },
      error: (error) => (this.error = error.message),
      complete: () => this.spinner.hide(),
    });
  }
}
