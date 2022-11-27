import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddProductComponent } from 'src/app/admin/add-product/add-product.component';
import { SafeData } from 'src/app/auth/safe-data.interface';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<SafeData> {
  constructor(private dialog: MatDialog) {}
  canDeactivate(
    component: SafeData): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isFormPristine()) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    };
    return of(true);
  }

}
