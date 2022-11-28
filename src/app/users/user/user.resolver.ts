import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of, tap } from 'rxjs';
import { GetUsersService, User } from 'src/app/users/get-users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: GetUsersService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params['id']).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate(["/users"]);
        return EMPTY
      })
    );
  }
}
