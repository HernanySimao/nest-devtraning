import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tags.entity"
import { join } from "path"
import { randomUUID } from "crypto"

@Entity('courses')
export class course {
    @PrimaryGeneratedColumn('uuid')
    id: String

    @Column()
    name: String

    @JoinTable()
    @ManyToMany(()=> Tag, tag=> tag.courses,{
        cascade: true,
    })
    
    tags: Tag[]

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