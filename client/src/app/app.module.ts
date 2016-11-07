import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {CoursesService} from "./services/courses.service";

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
