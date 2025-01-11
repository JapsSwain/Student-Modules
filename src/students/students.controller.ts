import { Controller, Post, Patch, Param, Delete,  Get, Body, NotFoundException } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStudentDto: CreateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }
  @Delete(':id')
remove(@Param('id') id: number) {
  return this.studentsService.remove(id);
}

}
