import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
@Get()
findAll(){
    return "Listando os cursos"
}
}
