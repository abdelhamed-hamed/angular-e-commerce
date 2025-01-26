import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../../shared/shared.module';
import { TitleComponent } from '../../shared/components/title/title.component';
import { Products } from '../../shared/interfaces/products.interface';
import { TopSalesService } from '../../services/top-sales.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-sales',
  standalone: true,
  imports: [SharedModule, CartComponent, TitleComponent],
  templateUrl: './top-sales.component.html',
  styleUrl: './top-sales.component.scss',
})
export class TopSalesComponent {
  productData: any[] = [];
  error?: string;
  constructor(private topSales: TopSalesService) {
    this.getTopSales();
  }

  getTopSales(): Subscription {
    return this.topSales.getTopSales().subscribe({
      next: (data: Products) => {
        this.productData.push(data);
        this.productData = [this.productData[0]];
      },
      error: (error) => (this.error = error.message),
    });
  }
}
