import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "admin",
    password: "admin",
    database: "tasks",
    synchronize: true,
    logging: true,
    entities: [],
})