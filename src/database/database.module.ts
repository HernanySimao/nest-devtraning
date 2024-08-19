import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (ConfigService: ConfigService) => {
        return {
          type: 'postgres',
          host: ConfigService.get('BD_HOST'),
          port: Number(ConfigService.get('BD_PORT')),
          username: ConfigService.get('BD_USER'),
          password: ConfigService.get('BD_PASS'),
          database: ConfigService.get('BD_NAME'),
          entities: [course, Tag],
          synchronize: false,
        };
      },

      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
