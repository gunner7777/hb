import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {GratsService} from "./grats.service";
import {LocalstorageService} from "./localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class RefreshGuard implements CanActivate {
  constructor(
    private gratsService: GratsService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.gratsService.gratsBegin) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
