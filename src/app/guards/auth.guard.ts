import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    console.log(this.authService.isAuthenticated());
    return this.authService.isAuthenticated();
//     if (!this.authService.isAuthenticated()) {
//       this.router.navigate(["welcome"]);
//       return false;
//     }
//     return true;
  }
}
