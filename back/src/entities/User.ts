import { Column, Entity, PrimaryGeneratedColumn,JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appoinment";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({type: "date"})
    birthdate: string;

    @Column({unique: true})
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, (Appointment) => Appointment.user)
    appointments: Appointment[];

}