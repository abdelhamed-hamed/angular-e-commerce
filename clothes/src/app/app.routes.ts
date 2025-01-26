import { Routes } from '@angular/router';
import { checkIdGuard } from './components/guards/check-id.guard';
import { checkLoginIdGuard } from './components/guards/check-login-id.guard';

export const routes: Routes = [
  // Start Home Route
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'Home',
      },

      {
        path: 'products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },

      {
        path: 'about',
        loadComponent: () =>
          import('./components/about/about.component').then(
            (c) => c.AboutComponent
          ),
        title: 'About',
      },

      {
        path: 'contact',
        loadComponent: () =>
          import('./components/contact/contact.component').then(
            (c) => c.ContactComponent
          ),

        title: 'Contact',
      },
    ],
  },

  // End Home Route

  //Start Login And Register
  {
    path: 'login',
    title: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canMatch: [checkLoginIdGuard],
  },

  {
    path: 'signup',
    title: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
    canMatch: [checkLoginIdGuard],
  },

  // End Login And Register

  {
    path: 'cart',
    title: 'Cart',
    loadComponent: () =>
      import('./components/user-cart/user-cart.component').then(
        (c) => c.UserCartComponent
      ),
    canMatch: [checkIdGuard],
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '**',
    title: 'Not-Found',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
