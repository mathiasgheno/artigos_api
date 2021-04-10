import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AutoresDto } from '../dto/autores.dto';
import { AutoresService } from '../service/autores.service';

@ApiTags('autores')
@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresServices: AutoresService) {}

  @Post()
  criarAutor(@Body() dto: AutoresDto) {
    return this.autoresServices.cadastrarAutor(dto);
  }

  @Get('/:id')
  buscarAutor(@Param('id') id) {
    return this.autoresServices.buscarAutor(id);
  }

  @Get()
  buscarAutores() {
    return this.autoresServices.buscar();
  }
}
