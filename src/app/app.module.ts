import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCard, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RrNavbarComponent } from './rr-navbar/rr-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RrDashboardComponent } from './rr-dashboard/rr-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { RrTableComponent } from './rr-table/rr-table.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { AboutProfileComponent } from './components/about-profile/about-profile.component';
import { FormsModule } from '@angular/forms';
import { ProfilesComponent } from './components/profiles/profiles.component';


const appRoutes: Routes = [
  { path: 'addProfile', component: AddProfileComponent },
  { path: 'searchProfile', component: SearchProfileComponent },
  { path: 'aboutus', component: AboutProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RrNavbarComponent,
    RrDashboardComponent,

    RrTableComponent,
    AddProfileComponent,
    SearchProfileComponent,
    AboutProfileComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule, MatOptionModule,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,
    
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
