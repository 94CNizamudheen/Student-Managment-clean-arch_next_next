import { Student } from "../domine/entities/students.entity";
import { StudentRepository } from "../domine/repositories/students.repository";
import { Inject } from "@nestjs/common";
export class UpdateStudentUseCase{
    constructor(
        @Inject('StudentRepository')
        private studentRepository:StudentRepository){};
    async execute(id:string,data:Student):Promise<Student|null>{
        return this.studentRepository.update(id,data)
    }
}
