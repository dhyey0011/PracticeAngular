// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authenticate.service';
import { AlertService } from '../services/alert.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const alertService = inject(AlertService);

  if (authService.isUserAuthenticated()) {
    return true;
  } else {
    alertService.showAlert('You need to log in to access the dashboard.');
    router.navigate(['/login']);
    return false;
  }
};
