
import { Injectable } from "@nestjs/common";
import { CreateStudentUseCase } from "src/domine/use-cases/students.use-cases";
import { UpdateStudentUseCase } from "src/domine/use-cases/update-student.use-case";
import { FindStudentsUseCase } from "src/domine/use-cases/find-student.use-case";
import { DeleteSutudentUseCase } from "src/domine/use-cases/delete-student.use-case";
import { Student } from "src/domine/entities/students.entity";

@Injectable()
export class StudentService{
    constructor(
        private createStudentUsecase:CreateStudentUseCase,
        private updateStudentUseCase:UpdateStudentUseCase,
        private findStudentsUseCase:FindStudentsUseCase,
        private deleteSutudentUseCase:DeleteSutudentUseCase
    ){}
    async create(data:Student):Promise<Student>{
        return this.createStudentUsecase.exicute(data)
    }
    async findById(id:string):Promise<Student|null>{
        return this.findStudentsUseCase.exicute(id)
    }
    async findAll():Promise<Student[]|null>{
        return this.findStudentsUseCase.findAll()
    }
    async update(id:string,data:Student):Promise<Student|null>{
        return this.updateStudentUseCase.execute(id,data)
    }
    async delete(id:string):Promise<boolean>{
        return this.deleteSutudentUseCase.execute(id)
    }
}