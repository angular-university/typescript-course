

export function mapLesson({url, description, duration, seqNo,courseId, pro, tags}:any): Lesson {
    return {
        url,
        description,
        duration,
        seqNo,
        courseId,
        pro,
        tags
    }
}



