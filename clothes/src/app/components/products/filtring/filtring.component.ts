import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-filtring',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filtring.component.html',
  styleUrl: './filtring.component.scss',
})
export class FiltringComponent {
  minPrice = [50, 100, 150, 200, 250];
  maxPrice = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
    800, 850, 900, 950, 1000,
  ];
  con(val: any) {
    console.log(val);
  }
}
