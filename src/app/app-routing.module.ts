import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';
import { OthersComponent } from './others/others.component';
import { ResultsComponent } from './results/results.component';
import { SignupComponent } from './signup/signup.component';
import { EventsComponent } from './working/events/events.component';
import { InfoComponent } from './working/info/info.component';
import { QueAnsComponent } from './working/que-ans/que-ans.component';
import { ReviewsComponent } from './working/reviews/reviews.component';


const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "events", component: EventsComponent},
  {path: "queans", component: QueAnsComponent},
  {path: "signup", component: SignupComponent},
  {path: "info", component: InfoComponent},
  {path: "departments", component: DepartmentsComponent},
  {path: "results", component: ResultsComponent},
  {path: "others", component: OthersComponent},
  {path: "career", component: CareerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
