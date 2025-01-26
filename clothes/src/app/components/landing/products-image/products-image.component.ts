import { Component } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-image',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './products-image.component.html',
  styleUrl: './products-image.component.scss',
})
export class ProductsImageComponent {
  images = [
    '../../../../assets/images/chair1.png',
    '../../../../assets/images/chair2.png',
    '../../../../assets/images/chair3.png',
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
