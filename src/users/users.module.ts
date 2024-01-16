import { User } from "./users.model";
import { Role } from "src/roles/roles.model";
import {forwardRef, Module} from "@nestjs/common";
import { UserRoles } from "src/roles/user-roles.model";
import { AuthModule } from "../auth/auth.module";
import { RolesModule } from "src/roles/roles.module";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";


@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule, forwardRef(()=>AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
