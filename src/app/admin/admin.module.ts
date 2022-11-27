import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AddProductModule } from 'src/app/admin/add-product/add-product.module';
import { AddUserModule } from 'src/app/admin/add-user/add-user.module';
import { AddProductComponent } from 'src/app/admin/add-product/add-product.component';
import { AddUserComponent } from 'src/app/admin/add-user/add-user.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { PermissionsGuard } from 'src/app/auth/permissions/permissions.guard';

const childRoutes: Routes = [
  { path: 'add-user', component: AddUserComponent},
  { path: 'add-product', component: AddProductComponent},
];

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: childRoutes,
    canActivate: [AuthGuard],
    canActivateChild: [PermissionsGuard]
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    AddProductModule,
    AddUserModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
