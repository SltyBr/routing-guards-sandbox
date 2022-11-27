import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from 'src/app/auth/auth-preload-strategy';
import { CanLoadAdminGuard } from 'src/app/auth/can-load-admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AuthPreloadStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
