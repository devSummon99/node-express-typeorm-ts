import { DataSource } from "typeorm";
import { Task, User } from "../modules";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "admin",
    password: "admin",
    database: "tasks",
    synchronize: true,
    logging: true,
    entities: [Task, User],
    cache:{
        duration:30000
    }
})