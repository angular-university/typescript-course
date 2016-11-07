import {Component, OnInit} from '@angular/core';
import {CoursesService} from "./services/courses.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private coursesService:CoursesService) {

    }

    ngOnInit() {
        this.coursesService.loadCourseDetail(1)
            .subscribe(console.log);
    }

}
