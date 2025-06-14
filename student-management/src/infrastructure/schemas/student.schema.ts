
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Student extends Document{
    @Prop({required:true})
    studentId:string;
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    classId:string;
    @Prop({required:true})
    parantId:string;
}
export const StudentSchema= SchemaFactory.createForClass(Student)