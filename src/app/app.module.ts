import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from 'src/app/shared/layout/header/header.module';
import { HomeModule } from 'src/app/home/home.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const materialEntities = [
  MatButtonModule,
  MatProgressBarModule
]
@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    HomeModule,
    MatDialogModule,
    HttpClientModule,
    ...materialEntities
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
