import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";

export class FindStudentsUseCase{
    constructor(private studentRepository:StudentRepository){}
    async exicute(id:string):Promise<Student|null>{
        return this.studentRepository.findById(id)
    }
    async findAll():Promise<Student[]|null>{
        return this.studentRepository.findAll()
    }
}
