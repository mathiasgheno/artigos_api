import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { format } from 'date-fns';

export class CriarArtigoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  titulo: string;

  @IsString()
  @ApiProperty()
  periodico: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    default: 1,
  })
  edicao: number;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    default: format(new Date(), 'yyyy-MM-dd'),
  })
  data: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    default: 1,
  })
  paginas: number;

  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty()
  autores: string[];
}
