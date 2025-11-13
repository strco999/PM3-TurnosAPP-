import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { Appointment } from "../entities/Appoinment";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
type: "postgres",
host: DB_HOST || "localhost",
port: DB_PORT || 5432,
username: DB_USERNAME || "test",
password: DB_PASSWORD || "test",
database: DB_NAME || "test",
synchronize: true,
dropSchema: false,
logging: false,
entities: [Appointment, User, Credential],
subscribers: [],
migrations: [],
});

export const userRepository = AppDataSource.getRepository(User);
export const credentialRepository = AppDataSource.getRepository(Credential);
export const appointmentRepository = AppDataSource.getRepository(Appointment);

