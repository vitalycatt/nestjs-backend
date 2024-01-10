import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "user@gmail.com",
    description: "Почтовый адрес пользователя",
  })
  readonly email: string;
  @ApiProperty({ example: "12345678", description: "Пароль пользователя" })
  readonly password: string;
}
