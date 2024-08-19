import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { createCoursesDTO } from './dto/create-courses-dto';
import { UpdateCoursesDTO } from './dto/update-courses-dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Tag) private readonly TagRepository: Repository<Tag>,
    @InjectRepository(course)
    private readonly courseRepository: Repository<course>,
  ) {}

  async findAll() {
    return this.courseRepository.find({
        relations: ['tags']
    });
  }

  async findOne(id: String) {
    const course = this.courseRepository.findOne({
      where: { id },
      relations: ['tags']
    });
    if (!course) {
      throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  async create(createCoursesDTO: createCoursesDTO) {
    const tags = await Promise.all(
        createCoursesDTO.tags.map(name=> this.preloadTagByName(name))
    )
    const course = this.courseRepository.create({
        ...createCoursesDTO,
        tags
    });
    return this.courseRepository.save(course);
  }

  async update(id: String, updateCoursesDTO: UpdateCoursesDTO) {
    const tags = updateCoursesDTO.tags && await Promise.all(
        updateCoursesDTO.tags.map(name=> this.preloadTagByName(name))
    )

    const course = await this.courseRepository.preload({
      ...updateCoursesDTO,
      id,
      tags
    });

    if (!course) {
      throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND);
    }

    return this.courseRepository.save(course);
  }

  async remove(id: String) {
    const course = await this.courseRepository.findOne({
      where: { id },
    });

    if (!course) {
      throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND);
    }

    return this.courseRepository.remove(course);
  }


  private async preloadTagByName(name: any): Promise<Tag> {
    const tag = await this.TagRepository.findOne({
        where: {
            name
        }
    })
    if(tag){
        return tag
    }

    return this.TagRepository.create({name})
  }
}
