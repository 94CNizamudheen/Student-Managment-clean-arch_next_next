export class Student {
    studentId: string;
    name: string;
    classId: string;
    parantId: string;
    constructor(data: Student) {
        this.studentId = data.studentId;
        this.name = data.name;
        this.classId = data.classId;
        this.parantId = data.parantId
    }
}