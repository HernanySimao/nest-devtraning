import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1724026150293 } from "src/migrations/1724026150293-CreateCoursesTable";
import { CreateTagsTable1724027590350 } from "src/migrations/1724027590350-CreateTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1724026150293, CreateTagsTable1724027590350],
})