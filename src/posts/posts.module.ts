import { User } from "src/users/users.model";
import { Post } from "./posts.model";
import { Module } from "@nestjs/common";
import { FilesModule } from "src/files/files.module";
import { PostsService } from "./posts.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { PostsController } from "./posts.controller";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
