import { Body, Controller, Get, Param, Post, Put, Res, Delete } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
@Get()
findAll(@Res() response){
    return response.status(200).json({message: "Listando os cursos"})
}

@Get(':id')
findOne(@Param('id') id: string){
  return `Buscando o curso com ID: ${id}`
}

@Post()
  create(@Body() body){
   return body;
  }

@Put(':id')
update(@Body() body, @Param('id') id: string){
  return "Atualizando curso"
}

@Delete(':id')
remove(@Param('id') id: string){
  return "Deletando curso"
}
}
