import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { createCoursesDTO } from './dto/create-courses-dto';
import { UpdateCoursesDTO } from './dto/update-courses-dto';

@Controller('courses')
export class CoursesController {

constructor (private readonly courseService: CoursesService){}

@Get()
findAll(){
    return this.courseService.findAll()
}

@Get(':id')
findOne(@Param('id') id: String){
  return this.courseService.findOne(id)
}

@Post()
  create(@Body() createCoursesDTO: createCoursesDTO){
   return this.courseService.create(createCoursesDTO)
  }

@Put(':id')
update(@Body() UpdateCoursesDTO: UpdateCoursesDTO, @Param('id') id: String){
  return this.courseService.update(id, UpdateCoursesDTO)
}

@HttpCode(HttpStatus.NO_CONTENT)
@Delete(':id')
remove(@Param('id') id: String){
  return this.courseService.remove(id)
}
}
