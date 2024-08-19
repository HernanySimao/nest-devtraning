import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { course } from "./courses.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: String

    @Column()
    name: String

    @ManyToMany(() => course, course => course.tags)
    courses: course[]

}