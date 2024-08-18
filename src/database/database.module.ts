import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from 'src/courses/entities/courses.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions : DataSourceOptions = {
 type: 'postgres',
 host: 'localhost',
 port: 5432,
 username: 'postgres',
 password: 'docker',
 database: 'devtraining',
 entities: [course],
 synchronize: true
}

@Module({
    imports: [TypeOrmModule.forRootAsync({
            useFactory: async () => {
                return{
                    ...dataSourceOptions
                }
            }
    })]
})
export class DatabaseModule {}
