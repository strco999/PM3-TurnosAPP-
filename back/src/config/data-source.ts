import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
type: "postgres",
host: DB_HOST || "localhost",
port: DB_PORT || 5432,
username: DB_USERNAME || "test",
password: DB_PASSWORD || "test",
database: DB_NAME || "test",
synchronize: true,
logging: false,
entities: [],
subscribers: [],
migrations: [],
});