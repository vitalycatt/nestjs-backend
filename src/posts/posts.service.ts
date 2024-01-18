import { FilesService } from "./../files/files.service";
import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./posts.model";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRopository: typeof Post,
    private filesService: FilesService
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const post = await this.postRopository.create({ ...dto, image: fileName });
    return post;
  }
}
