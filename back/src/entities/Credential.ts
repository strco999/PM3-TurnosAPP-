import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials",
})
export class Credential {
    @PrimaryGeneratedColumn("uuid")  
    id: number;
    
    @Column({
        length: 100,
        unique: true,
    })    
    username: string;
    
    @Column()
    password: string;
}
