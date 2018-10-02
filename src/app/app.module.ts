import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCard, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RrNavbarComponent } from './rr-navbar/rr-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RrDashboardComponent } from './rr-dashboard/rr-dashboard.component';

import { RrTableComponent } from './rr-table/rr-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RrNavbarComponent,
    RrDashboardComponent,

    RrTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
