import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StudentSchema } from "./infrastructure/schemas/student.schema";
import { StudentController } from "./infrastructure/controllers/student.controller";
import { StudentService } from "./application/student.service";
import { CreateStudentUseCase } from "./domine/use-cases/students.use-cases";
import { UpdateStudentUseCase } from "./domine/use-cases/update-student.use-case";
import { DeleteSutudentUseCase } from "./domine/use-cases/delete-student.use-case";
import { FindStudentsUseCase } from "./domine/use-cases/find-student.use-case";
import { MongoStudentRepository } from "./infrastructure/repositories/mongo-student.repository";


@Module({
    imports:[
        MongooseModule.forFeature([{name:'Student',schema:StudentSchema}])
    ],
    controllers:[StudentController],
    providers:[
        StudentService,
        //usecases
        CreateStudentUseCase,
        UpdateStudentUseCase,
        DeleteSutudentUseCase,
        FindStudentsUseCase,
        //repositories
        {
            provide:'StudentRepository',
            useClass:MongoStudentRepository
        },
    ],
})
export class StudentModule{}