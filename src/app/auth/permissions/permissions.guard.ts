import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}
  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('checking permissions');
    return this.auth.hasPermissions();
  }
}
