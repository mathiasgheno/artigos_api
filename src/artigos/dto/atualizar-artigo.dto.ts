import { CriarArtigoDto } from './criar.artigo.dto';
import { PartialType } from '@nestjs/swagger';

export class AtualizarArtigoDto extends PartialType(CriarArtigoDto) {}
