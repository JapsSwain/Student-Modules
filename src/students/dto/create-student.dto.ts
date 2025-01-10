import { IsString, IsEmail, IsDate } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsDate()
  enrollmentDate: Date;
}
