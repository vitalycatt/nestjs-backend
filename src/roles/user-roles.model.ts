import { User } from "src/users/users.model";
import { Role } from "src/roles/roles.model";
import { ApiProperty } from "@nestjs/swagger";
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: "1", description: "Уникальный идентефикатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.NUMBER })
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  userId: number;
}
