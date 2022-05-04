import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.currentUser.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) return true;
        if (!isAuth) return this.router.createUrlTree(['auth']);
      })
    );
  }

}
