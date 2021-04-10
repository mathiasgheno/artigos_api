import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoresEntity } from '../entity/autores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(AutoresEntity)
    private readonly autoresRespository: Repository<AutoresEntity>,
  ) {}

  cadastrarAutor(autor) {
    return this.autoresRespository.save(autor);
  }

  buscarAutor(id) {
    return this.autoresRespository.findOne({ id });
  }

  buscar() {
    return this.autoresRespository.find();
  }
}
