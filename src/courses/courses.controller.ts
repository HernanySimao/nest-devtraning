import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('courses')
export class CoursesController {
@Get()
findAll(){
    return "Listando os cursos"
}

@Get(':id')
findOne(@Param('id') id: string){
  return `Buscando o curso com ID: ${id}`
}

@Post()
  create(@Body() body){
   return body;
  }
}
