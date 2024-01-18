import * as path from "path";
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { Post } from "./posts/posts.model";
import { Module } from "@nestjs/common";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from "./auth/auth.module";
import { RolesModule } from "./roles/roles.module";
import { PostsModule } from "./posts/posts.module";
import { UsersModule } from "./users/users.module";
import { FilesModule } from "./files/files.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Post],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
  ],
})
export class AppModule {}
