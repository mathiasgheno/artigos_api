import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { ArtigosEntity } from '../entity/artigos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoresEntity } from '../../autores/entity/autores.entity';
import { CriarArtigoDto } from '../dto/criar.artigo.dto';
import { AtualizarArtigoDto } from '../dto/atualizar-artigo.dto';

@Injectable()
export class ArtigosService {
  constructor(
    @InjectRepository(ArtigosEntity)
    private readonly artigosRepository: Repository<ArtigosEntity>,
    @InjectRepository(AutoresEntity)
    private readonly autoresRepository: Repository<AutoresEntity>,
  ) {}

  async criarArtigo(artigo) {
    try {
      const autores = await Promise.all(
        artigo.autores.map((autor) =>
          this.autoresRepository.findOne({ id: autor }),
        ),
      );
      artigo.autores = autores;
      return this.artigosRepository.save(artigo);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  deletarArtigo(id) {
    return this.artigosRepository.delete({ id });
  }

  buscarArtigo(id) {
    return this.artigosRepository.findOne({ id });
  }

  buscar() {
    return this.artigosRepository.find({
      relations: ['autores'],
    });
  }

  async atualizar(id: string, dto) {
    if (dto.autores) {
      const autores = await Promise.all(
        dto.autores.map((autor) =>
          this.autoresRepository.preload({ id: autor }),
        ),
      );
      dto.autores = autores;
    }

    const artigo = await this.artigosRepository.preload({
      id,
      ...dto,
    });
    if (artigo) {
      return this.artigosRepository.save(artigo);
    }
  }
}
