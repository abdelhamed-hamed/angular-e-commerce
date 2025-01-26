import { Component, HostListener, signal } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { UserIdService } from '../../services/userId.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faPhone = faPhone;

  isSettingMenuOpen = false;

  settings = signal<any[]>([]);
  constructor(private userID: UserIdService, private router: Router) {
    this.addHeaderService();
    library.add(faPhone);
  }

  addHeaderService() {
    if (!this.userID.getToken()) {
      this.settings.set([
        {
          tittle: 'login',
          routerLink: '/login',
        },
        {
          tittle: 'signup',
          routerLink: '/signup',
        },
      ]);
    } else {
      this.settings.set([
        {
          tittle: 'cart',
          routerLink: '/cart',
        },
        {
          tittle: 'logout',
        },
      ]);
    }
  }

  logOut() {
    this.userID.removeToken();
    this.router.navigate(['/home']);
  }

  onSettingsClick(event: Event) {
    this.addHeaderService();
    this.isSettingMenuOpen = !this.isSettingMenuOpen;
    event.stopPropagation(); // منع نشر الحدث للنوافذ الخارجية
  }

  //غلاق القائمة عند الضغط على أي عنصر دون القائممة
  // الاستماع للضغط خارج العنصر وإغلاق القائمة
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.isSettingMenuOpen) {
      this.isSettingMenuOpen = false;
    }
  }
}
