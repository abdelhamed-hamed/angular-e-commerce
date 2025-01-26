import { Component } from '@angular/core';
import { BlogCartComponent } from './blog-cart/blog-cart.component';
import { TitleComponent } from '../../shared/components/title/title.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogCartComponent, TitleComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
