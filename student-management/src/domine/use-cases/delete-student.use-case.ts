
import { StudentRepository } from "../repositories/students.repository";

export class DeleteSutudentUseCase {
    constructor(private studentRepository: StudentRepository) { };
    async execute(id: string): Promise<boolean> {
        return this.studentRepository.delete(id)
    }
}