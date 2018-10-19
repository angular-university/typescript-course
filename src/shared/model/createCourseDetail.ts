import {CourseDetail} from "./course-detail";
export function createCourseDetail({
  id,
  url,
  description,
  iconUrl,
  courseListIcon,
  seqNo,
  longDescription,
  comingSoon,
  isNew,
  isOngoing,
  Lessons
}:any):CourseDetail {
  return {
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo,
    longDescription,
    comingSoon,
    isNew,
    isOngoing,
    lessons: Lessons.map(createLessonFromDbModel)
  };

}

function createLessonFromDbModel({
  id,
  url,
  description,
  duration,
  seqNo,
  courseId,
  pro,
  tags
}:any) {
  return {
    id,
    url,
    description,
    duration,
    seqNo,
    courseId,
    pro,
    tags
  }
}












