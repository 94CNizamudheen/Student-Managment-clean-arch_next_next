import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";
import { Inject } from "@nestjs/common";
export class UpdateStudentUseCase{
    constructor(
        @Inject('StudentRepository')
        private studentRepository:StudentRepository){};
    async execute(id:string,data:Student):Promise<Student|null>{
        return this.studentRepository.update(id,data)
    }
}
