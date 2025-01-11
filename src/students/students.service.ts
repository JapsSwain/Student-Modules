import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async update(id: number, updateStudentDto: CreateStudentDto): Promise<Student> {
    await this.studentRepository.update(id, updateStudentDto);
    return this.studentRepository.findOneBy({ id });


  }
  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
  
  
}
