import { Component, OnInit, Input } from '@angular/core';
import {Course} from "ctc-shared/model/course";






@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  course: Course;

  constructor() { }

  ngOnInit() {
  }

}
