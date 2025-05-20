import { Student } from "../entities/students.entity";

export interface StudentRepository{
    save(student:Student): Promise<Student>;
    findById(id:string):Promise<Student|null>;
    findAll():Promise<Student[]>;
    update(id:string,data:Student):Promise<Student|null>;
    delete(id:string):Promise<boolean>

}