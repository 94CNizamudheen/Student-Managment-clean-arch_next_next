
import { StudentRepository } from "../domine/repositories/students.repository";
import { Inject } from "@nestjs/common";
export class DeleteSutudentUseCase {

    constructor(
        @Inject('StudentRepository')
        private studentRepository: StudentRepository
    ) { };
    async execute(id: string): Promise<boolean> {
        return this.studentRepository.delete(id)
    }
}