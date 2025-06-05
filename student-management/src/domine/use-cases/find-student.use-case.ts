import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";
import { Inject } from "@nestjs/common";
export class FindStudentsUseCase {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: StudentRepository
    ) { }
    async exicute(id: string): Promise<Student | null> {
        return this.studentRepository.findById(id)
    }
    async findAll(): Promise<Student[] | null> {
        return this.studentRepository.findAll()
    }
}
