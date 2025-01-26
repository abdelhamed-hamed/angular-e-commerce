import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-blog-cart',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blog-cart.component.html',
  styleUrl: './blog-cart.component.scss',
})
export class BlogCartComponent {
  blogDate = [
    {
      type: 'chair design',
      name: 'by mido hamed',
      date: '2022-03-15',
      title: 'arrangement thats nearly perfect.',
      image: '../../../../assets/images/blog-image1.jpg',
    },
    {
      type: 'sofa design',
      name: 'by sasa hamed',
      date: '2022-03-15',
      title: 'Eworkstation arrangement that',
      image: '../../../../assets/images/blog-image2.jpg',
    },
  ];
}
