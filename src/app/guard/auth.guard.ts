import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is authenticated or meets certain conditions.
    if (this.authService.IsloggedIn()) {
      return true; // Allow navigation to the requested route.
    } else {
      // Redirect the user to the login page or another appropriate route.
      this.router.navigate(['/login']);
      return false; // Block navigation to the requested route.
    }
  }
}
