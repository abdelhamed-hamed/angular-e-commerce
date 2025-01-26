import { Component, inject, signal, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
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

  settings = [
    {
      tittle: 'login',
      routerLink: '/login',
    },
    {
      tittle: 'signup',
      routerLink: '/signup',
    },
  ];

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
  shopsDownOpen: boolean = false;
  blogDownOpen: boolean = false;

  constructor(private http: HttpClient) {}

  //Start Searching
  productsTitel = signal<any[]>([]);
  searchControl = new FormControl();
  searchResults$?: Observable<any[]>;
  productSearch: any = [];
  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms pause in typing
        distinctUntilChanged(), // Ignore duplicate queries
        switchMap((query) => this.search(query)) // Switch to the latest search
      )
      .subscribe({
        next: (res: any) => {
          this.productSearch = []; // Clear the search results array if the query is empty
          this.productSearch.push(res);
        },
      });
  }
  search(query: string): Observable<any[]> {
    if (!query) {
      this.productSearch = []; // Clear the search results array if the query is empty
      return of([]); // Return empty array if the query is empty
    }
    const apiUrl = `https://api.escuelajs.co/api/v1/products/?title=${query}`;
    return this.http.get<any[]>(apiUrl);
  }

  // End searching

  shopDropdown() {
    this.shopsDownOpen = !this.shopsDownOpen;
  }

  blogDropdown() {
    this.blogDownOpen = !this.blogDownOpen;
  }
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
