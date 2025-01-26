import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-user-cart',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.scss',
})
export class UserCartComponent {}
