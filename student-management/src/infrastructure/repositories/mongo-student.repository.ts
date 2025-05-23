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
        const createdStudent= new this.studentModel(student);
        return createdStudent.save();
    }
    async findById(id: string): Promise<Student | null> {
        return this.studentModel.findById(id).exec();
    }
    async findAll(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }
    async update(id: string, data: Student): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id,data,{new:true}).exec()
    }
    async delete(id: string): Promise<boolean> {
        const result=await this.studentModel.findByIdAndDelete(id).exec()
        return !!result;
    }
}
