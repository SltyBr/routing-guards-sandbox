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
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormGuard } from 'src/app/auth/form.guard';

const childRoutes: Routes = [
  {
    path: '',
    canActivateChild: [PermissionsGuard],
    children: [
      { path: 'add-user', component: AddUserComponent, canDeactivate: [FormGuard] },
      { path: 'add-product', component: AddProductComponent, canDeactivate: [FormGuard] },
    ],
  },
  {
    path: 'show-table', component: TableComponent
  }
];

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: childRoutes,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [AdminComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    AddProductModule,
    AddUserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
