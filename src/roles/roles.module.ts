import { Module } from "@nestjs/common";
import { Role } from "./roles.model";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";
import { RolesService } from "./roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { RolesController } from "./roles.controller";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
