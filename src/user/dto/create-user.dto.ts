import { MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @MinLength(6, { message: 'Пароль меньше 6 символов' })
  password: string;
}
