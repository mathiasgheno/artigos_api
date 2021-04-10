import { Module } from '@nestjs/common';
import { ArtigosController } from './controller/artigos.controller';
import { ArtigosService } from './service/artigos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtigosEntity } from './entity/artigos.entity';
import { AutoresEntity } from '../autores/entity/autores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtigosEntity, AutoresEntity])],
  controllers: [ArtigosController],
  providers: [ArtigosService],
})
export class ArtigosModule {}
