import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1724026150293 } from 'src/migrations/1724026150293-CreateCoursesTable';
import { CreateTagsTable1724027590350 } from 'src/migrations/1724027590350-CreateTagsTable';
import { CreateCoursesTagsTable1724028880712 } from 'src/migrations/1724028880712-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1724030155448 } from 'src/migrations/1724030155448-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1724031039874 } from 'src/migrations/1724031039874-AddTagsIdToCoursesTagsTable';

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
