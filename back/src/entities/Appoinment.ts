import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
}

@Entity({
    name: "appointments",

})
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: Date})
    date: Date;

    @Column()
    time: string;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;

    @Column({ type: "enum", enum: AppointmentStatus, default: AppointmentStatus.ACTIVE,})
    status: AppointmentStatus;
}