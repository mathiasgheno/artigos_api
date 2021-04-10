import { Module } from '@nestjs/common';
import { AutoresController } from './controller/autores.controller';
import { AutoresService } from './service/autores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresEntity } from './entity/autores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoresEntity])],
  controllers: [AutoresController],
  providers: [AutoresService],
})
export class AutoresModule {}
