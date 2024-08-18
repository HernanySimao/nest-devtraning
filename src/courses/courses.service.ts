import { Injectable } from '@nestjs/common';
import { course } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: course[] = [{
        id: 1,
        name: "Curso de Nestjs",
        tags: ['NodeJs']
    }]
}
