import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  Post,
  Body,
  Controller,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";

@Controller("posts")
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.create(dto, image);
  }
}
