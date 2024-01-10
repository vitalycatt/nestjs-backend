import { Role } from "./roles.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRopository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRopository.create(dto);
    return role;
  }

  async getRoleBuyValue(value: string) {
    const role = await this.roleRopository.findOne({ where: { value } });
    return role;
  }
}
