import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private auth: AuthService){}
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.auth.isLoggedIn().pipe(
      switchMap((isUserLoggedIn) => isUserLoggedIn ? fn() : of(null))
    );
  }
}