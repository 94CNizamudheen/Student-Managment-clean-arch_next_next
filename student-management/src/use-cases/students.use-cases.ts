import { Student } from "../domine/entities/students.entity";
import { StudentRepository } from "../domine/repositories/students.repository";
import { Inject } from '@nestjs/common';

export class CreateStudentUseCase {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: StudentRepository
    ) { }
    async exicute(data: Student) {
        const student = new Student(data);
        return this.studentRepository.save(student)
    }
}