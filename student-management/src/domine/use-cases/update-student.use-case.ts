import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";

export class UpdateStudentUseCase{
    constructor(private studentRepository:StudentRepository){};
    async execute(id:string,data:Student):Promise<Student|null>{
        return this.studentRepository.update(id,data)
    }
}
