import { CanMatchFn, Router } from '@angular/router';
import { UserIdService } from '../../services/userId.service';
import { inject } from '@angular/core';

export const checkLoginIdGuard: CanMatchFn = (route, segments) => {
  const userId = inject(UserIdService);
  const router = inject(Router);
  if (userId.getToken() === null) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
