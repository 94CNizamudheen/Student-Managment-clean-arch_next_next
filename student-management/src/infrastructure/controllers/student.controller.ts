
import { Controller,Get,Post,Put,Delete,Body,Param } from "@nestjs/common";
import { StudentService } from "src/application/student.service";
import { Student } from "src/domine/entities/students.entity";

@Controller('students')
export class StudentController{
    constructor(private studentService:StudentService){}
    @Post()
    async create(@Body()data:Student):Promise<Student>{
        return this.studentService.create(data)
    }
    @Get(':id')
    async findById(@Param('id')id:string):Promise<Student|null>{
        return this.studentService.findById(id);
    }
    @Get()
    async findAll():Promise<Student[]|null>{
        return this.studentService.findAll()
    }
    @Put(':id')
    async update(@Param('id')id:string,@Body()data:Student):Promise<Student|null>{
        return this.studentService.update(id,data)
    }
    @Delete(':id')
    async delete(@Param('id')id:string):Promise<boolean>{
        return this.studentService.delete(id)
    }
}