import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Aquí puedes agregar la lógica para verificar si el usuario está autenticado
    const isAuthenticated = true; // Cambia esto por la lógica real de autenticación

    if (!isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

export function authGuardFactory(authGuard: AuthGuard) {
  return () => authGuard.canActivate();
}
