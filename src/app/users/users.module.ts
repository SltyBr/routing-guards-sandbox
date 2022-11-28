import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { UserResolver } from 'src/app/users/user/user.resolver';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UsersModule {}
