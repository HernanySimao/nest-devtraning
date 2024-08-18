import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { course } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: course[] = [{
        id: 1,
        name: "Curso de Nestjs",
        tags: ['NodeJs']
    }]

    findAll(){
    return this.courses;
    }

    findOne(id: number){
     const course = this.courses.find(course => course.id === id)
     if(!course){
        throw new HttpException('ID não encontrado', HttpStatus.NOT_FOUND)
     }
     return course
    }

    create(createCoursesDTO: any){
    this.courses.push(createCoursesDTO)
    }

    update(id: number, updateCoursesDTO: any){
        const existingCourse = this.findOne(id)
        if(existingCourse){
            const idx = this.courses.findIndex(course=> course.id === id)
            this.courses[idx] = {
                id,
                ...updateCoursesDTO
            }
        }
    }

    remove(id: number){
        const idx = this.courses.findIndex(course=> course.id === id)
        if(idx >=0){
            this.courses.splice(idx, 1)
        }
    }
}
