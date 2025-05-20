import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";

export class CreateStudentUseCase{
    constructor(private studentRepository:StudentRepository){}
        async exicute(data:Student){
            const student= new Student(data);
            return this.studentRepository.save(student)
        }
}