import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { course } from "./courses.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @ManyToMany(() => course, course => course.tags)
    courses: course[]

}