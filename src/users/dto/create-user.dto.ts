import { ApiProperty } from "@nestjs/swagger";
import { Length, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "user@gmail.com",
    description: "Почтовый адрес пользователя",
  })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный почтовый адрес" })
  readonly email: string;
  @ApiProperty({ example: "12345678", description: "Пароль пользователя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16" })
  readonly password: string;
}
