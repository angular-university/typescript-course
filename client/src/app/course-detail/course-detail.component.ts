import { Component, OnInit ,Input} from '@angular/core';
import {CourseDetail} from "../../../../shared/model/course-detail";

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input()
  courseDetail:CourseDetail;

  constructor() {


  }

  ngOnInit() {


  }

}
