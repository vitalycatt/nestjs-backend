import { User } from "./users.model";
import { Role } from "src/roles/roles.model";
import { Post } from "src/posts/posts.model";
import { UserRoles } from "src/roles/user-roles.model";
import { AuthModule } from "../auth/auth.module";
import { RolesModule } from "src/roles/roles.module";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { forwardRef, Module } from "@nestjs/common";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
