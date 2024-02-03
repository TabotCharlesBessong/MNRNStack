import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MaxLength(32)
  @MinLength(2)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(32)
  @MinLength(2)
  lastName: string;

  @IsNotEmpty()
  @MaxLength(32)
  password: string;
}
