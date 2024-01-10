import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5050;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("NestJs BACKEND")
    .setDescription("nestjs-backend project description")
    .setVersion("1.0.0")
    .addTag("postgres")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`SERVER STARTING ON PORT ${PORT}`));
}

start();
