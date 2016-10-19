

type Lesson = {

    readonly url:string;
    readonly description: string;
    readonly duration: string;
    readonly seqNo: number;
    readonly courseId:string;
    readonly pro: boolean;
    readonly tags: string;

}



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



