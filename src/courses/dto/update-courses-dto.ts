import { PartialType } from "@nestjs/mapped-types";
import { createCoursesDTO } from "./create-courses-dto";

export class UpdateCoursesDTO extends PartialType (createCoursesDTO){
 
}