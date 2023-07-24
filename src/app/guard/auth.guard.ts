import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if the user is authenticated or meets certain conditions.
    if (this.authService.IsloggedIn()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if (menu == 'user') {
          if (this.authService.GetUserrole() == 'admin') {
            return true;
          } else {
            this.toastr.warning('you dont have access');
            this.router.navigate(['']);
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true; // Allow navigation to the requested route.
      }
    } else {
      // Redirect the user to the login page or another appropriate route.
      this.router.navigate(['/login']);
      return false; // Block navigation to the requested route.
    }
  }
}
