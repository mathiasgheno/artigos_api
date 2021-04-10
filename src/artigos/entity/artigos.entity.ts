import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutoresEntity } from '../../autores/entity/autores.entity';
import { JoinTable } from 'typeorm';

@Entity('artigos')
export class ArtigosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  periodico: string;

  @Column()
  edicao: number;

  @Column()
  data: string;

  @Column()
  paginas: number;

  @JoinTable()
  @ManyToMany(() => AutoresEntity, (autores) => autores.artigos)
  autores: AutoresEntity[];
}
