import {CourseModel} from "../model/model";
import {CourseSummary, createCourseSummary, createCourseSummaries} from "../../shared/model/course-summary";
import * as Bluebird from "bluebird";

export function findAllCourses() : Bluebird<CourseSummary[]>  {
  return CourseModel.findAll({
    order: ['seqNo']
  })
  .then(createCourseSummaries)
}