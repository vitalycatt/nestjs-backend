import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidationExeption } from "src/exeptions/validation.exeption";
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      let messages = errors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
      });

      throw new ValidationExeption(messages);
    }

    return value;
  }
}
