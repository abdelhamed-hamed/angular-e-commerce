import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Cart Icons
  icons = [
    {
      icon: 'fa-brands fa-facebook',
      routerLink: 'https://www.facebook.com/?locale=ar_AR',
    },

    {
      icon: 'fa-brands fa-linkedin',
      routerLink: 'https://www.linkedin.com/in/abdelhamed-hamed-831a90344/',
    },

    {
      icon: 'fa-brands fa-github',
      routerLink: 'https://github.com/abdelhamed-hamed',
    },
  ];
  // Nav Links
  links = [
    {
      tittle: 'home',
      routerLink: '/home',
    },
    {
      tittle: 'products',
      routerLink: '/home/products',
    },
    {
      tittle: 'about',
      routerLink: '/home/about',
    },
    {
      tittle: 'contact',
      routerLink: '/home/contact',
    },
  ];
  // contact
  contacts = [
    {
      title: 'Cairo, Egypt',
      icon: 'fa-solid fa-location-dot',
    },
    {
      title: '+201030291524',
      icon: 'fa-solid fa-phone',
    },
    {
      title: 'midohamedh14@gmail.com',
      icon: 'fa-solid fa-envelope-open',
    },
  ];

  // Payung Image
  paying = [
    '../../../assets/images/payoneer.png',
    '../../../assets/images/paypal.png',
    '../../../assets/images/maser.png',
  ];
  date = Date.now();

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
