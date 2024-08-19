import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1724026150293 } from 'src/migrations/1724026150293-CreateCoursesTable';
import { CreateTagsTable1724027590350 } from 'src/migrations/1724027590350-CreateTagsTable';
import { CreateCoursesTagsTable1724028880712 } from 'src/migrations/1724028880712-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1724030155448 } from 'src/migrations/1724030155448-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1724031039874 } from 'src/migrations/1724031039874-AddTagsIdToCoursesTagsTable';
import { Tag } from 'src/courses/entities/tags.entity';
import { course } from 'src/courses/entities/courses.entity';


export const dataSourceOptions : DataSourceOptions = {
  type: 'postgres',
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  username: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
  entities: [course, Tag],
  synchronize: false
 }
 
export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1724026150293,
    CreateTagsTable1724027590350,
    CreateCoursesTagsTable1724028880712,
    AddCoursesIdToCoursesTagsTable1724030155448,
    AddTagsIdToCoursesTagsTable1724031039874
  ],
});
