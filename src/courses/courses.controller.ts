import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('courses')
export class CoursesController {
@Get()
findAll(){
    return "Listando os cursos"
}

@Get(':id')
findOne(@Param() params){
  return `Buscando o curso com ID: ${params.id}`
}
}
