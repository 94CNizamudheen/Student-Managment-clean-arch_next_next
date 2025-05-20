export class Student {
    id: string;
    name: string;
    classId: string;
    parantId: string;
    constructor(data: Student) {
        this.id = data.id;
        this.name = data.name;
        this.classId = data.classId;
        this.parantId = data.parantId
    }

}