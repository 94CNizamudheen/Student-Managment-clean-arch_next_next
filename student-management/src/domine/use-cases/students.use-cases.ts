import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";
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