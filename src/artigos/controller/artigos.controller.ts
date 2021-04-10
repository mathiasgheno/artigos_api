import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CriarArtigoDto } from '../dto/criar.artigo.dto';
import { ApiTags } from '@nestjs/swagger';
import { ArtigosService } from '../service/artigos.service';
import { AtualizarArtigoDto } from '../dto/atualizar-artigo.dto';

@Controller('artigos')
@ApiTags('artigos')
export class ArtigosController {
  constructor(private readonly artigosService: ArtigosService) {}

  @Post()
  criarArtigo(@Body() dto: CriarArtigoDto) {
    return this.artigosService.criarArtigo(dto);
  }

  @Get('/:id')
  buscarArtigo(@Param('id') id: string) {
    return this.artigosService.buscarArtigo(id);
  }

  @Put('/:id')
  atualizarArtigo(@Param('id') id: string, @Body() dto: AtualizarArtigoDto) {
    return this.artigosService.atualizar(id, dto);
  }

  @Delete('/:id')
  deletarArtigo(@Param('id') id: string) {
    return this.artigosService.deletarArtigo(id);
  }

  @Get()
  buscar() {
    return this.artigosService.buscar();
  }
}
