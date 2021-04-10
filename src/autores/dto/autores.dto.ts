import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AutoresDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nome: string;
}