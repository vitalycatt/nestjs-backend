import { Role } from "src/roles/roles.model";
import { Post } from "src/posts/posts.model";
import { UserRoles } from "src/roles/user-roles.model";
import { ApiProperty } from "@nestjs/swagger";
import {
  Table,
  Model,
  Column,
  HasMany,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентефикатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "user@gmail.com",
    description: "Почтовый адрес пользователя",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "12345678", description: "Пароль пользователя" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  password: string;

  @ApiProperty({
    example: "true",
    description: "Заблокирован пользователь или нет",
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  ban: boolean;

  @ApiProperty({
    example: "За плохое повидение",
    description: "Причина блокировки",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}
