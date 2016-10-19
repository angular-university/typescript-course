import { Component,OnInit } from '@angular/core';
import {CourseService} from "./shared/services/course.service";
import {Observable} from "rxjs/Rx";
import {Course} from "ctc-shared/model/course";

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    course$: Observable<Course>;


    constructor(private courseService: CourseService) {

    }

    ngOnInit():void {

        this.course$ = this.courseService.findCourseById(1);

    }


}
