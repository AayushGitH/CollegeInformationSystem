import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { QueAnsComponent } from './que-ans/que-ans.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    ReviewsComponent,
    EventsComponent,
    QueAnsComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ReviewsComponent,QueAnsComponent]
})
export class WorkingModule { }
