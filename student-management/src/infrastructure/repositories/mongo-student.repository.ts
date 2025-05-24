import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Student as StudentDocument} from "../schemas/student.schema";
import { StudentRepository } from "src/domine/repositories/students.repository";
import { Student } from "src/domine/entities/students.entity";

@Injectable()
export class MongoStudentRepository implements StudentRepository{
    constructor(@InjectModel('Student') private studentModel:Model<StudentDocument>){}

    async save(student: Student): Promise<Student> {
        const createdStudent= await this.studentModel.create(student);
        return createdStudent as Student
    }
    async findById(id: string): Promise<Student | null> {
        const student = await this.studentModel.findById(id).exec();
        return student as Student
    }
    async findAll(): Promise<Student[]> {
       const student= await this.studentModel.find().exec();
       return student as Student[]
    }
    async update(id: string, data: Student): Promise<Student | null> {
        const res= await this.studentModel.findByIdAndUpdate(id,data,{new:true}).exec();
        return res as Student
    }
    async delete(id: string): Promise<boolean> {
        const result=await this.studentModel.findByIdAndDelete(id).exec()
        return !!result;
    }
};

