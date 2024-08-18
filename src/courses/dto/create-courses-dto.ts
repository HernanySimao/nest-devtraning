import { IsString } from "class-validator"

export class createCoursesDTO{
   @IsString()
   readonly name: String
   
   @IsString( {each: true})
   readonly tags: String[]
}