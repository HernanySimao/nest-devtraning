import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tags.entity"
import { join } from "path"

@Entity('courses')
export class course {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: String

    @JoinTable()
    @ManyToMany(()=> Tag, tag=> tag.courses,{
        cascade: true,
    })
    
    tags: Tag[]
}