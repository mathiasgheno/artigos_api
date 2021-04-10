import { Module } from '@nestjs/common';
import { AutoresModule } from './autores/autores.module';
import { ArtigosModule } from './artigos/artigos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AutoresModule,
    ArtigosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
