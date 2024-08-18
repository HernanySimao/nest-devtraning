import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class course {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: String

    @Column('json', {nullable: true})
    tags: String[]
}