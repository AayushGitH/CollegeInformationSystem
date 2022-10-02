import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkingModule } from './working/working.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ResultsComponent } from './results/results.component';
import { CareerComponent } from './career/career.component';
import { OthersComponent } from './others/others.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    DepartmentsComponent,
    ResultsComponent,
    CareerComponent,
    OthersComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    WorkingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
