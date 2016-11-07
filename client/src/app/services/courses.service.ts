import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {CourseDetail} from "../../../../shared/model/course-detail";



@Injectable()
export class CoursesService {

  constructor(private http:Http) { }


    loadCourseDetail(courseId: number) :Observable<CourseDetail> {

        return this.http.get(`/api/courses/${courseId}`)
            .map(res => res.json());

    }


}
