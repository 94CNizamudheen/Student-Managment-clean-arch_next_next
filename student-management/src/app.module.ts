
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/student-management',{
    }),
    StudentModule
  ],
})
export class AppModule {}
