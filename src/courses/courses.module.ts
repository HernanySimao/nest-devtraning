import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from './entities/courses.entity';

@Module({
    imports:[TypeOrmModule.forFeature([course])],
    controllers: [CoursesController],
    providers: [CoursesService]
})
export class CoursesModule {}
