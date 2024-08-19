import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { course } from "./courses.entity";
import { randomUUID } from "crypto";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: String

    @Column()
    name: String

    @ManyToMany(() => course, course => course.tags)
    courses: course[]

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date

    @BeforeInsert()
    generateID(){
        if(this.id){
            return
        }
        this.id = randomUUID()
    }
}