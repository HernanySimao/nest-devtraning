import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {


    constructor(@InjectRepository(course) private readonly courseRepository: Repository<course>,) { }

    async findAll() {
        return this.courseRepository.find;
    }

    async findOne(id: number) {
        const course = this.courseRepository.findOne({
            where: { id }
        })
        if (!course) {
            throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND)
        }
        return course
    }

    async create(createCoursesDTO: any) {
        const course = this.courseRepository.create(createCoursesDTO)
        return this.courseRepository.save(course)
    }

    async update(id: number, updateCoursesDTO: any) {
        const course = await this.courseRepository.preload({
            ...updateCoursesDTO,
            id,
        })

        if (!course) {
            throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND)
        }

        return this.courseRepository.save(course)
    }

    async remove(id: number) {
        const course = await this.courseRepository.findOne({
            where: { id }
        })

        if (!course) {
            throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND)
        }

        return this.courseRepository.remove(course)
    }
}
