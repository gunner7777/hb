import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {LocalstorageService} from "./localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class LocalstorageResolver implements Resolve<boolean> {
  constructor(private localStorageService: LocalstorageService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //this.localStorageService.getCompleteStatus();
    //return of(true);
    return of(this.localStorageService.getCompleteStatus());
  }
}
