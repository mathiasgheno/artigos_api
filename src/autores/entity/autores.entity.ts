import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToMany,
} from 'typeorm';
import { ArtigosEntity } from '../../artigos/entity/artigos.entity';

@Entity('autores')
export class AutoresEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @ManyToMany(() => ArtigosEntity, (artigo) => artigo.autores)
  artigos: ArtigosEntity[];
}
