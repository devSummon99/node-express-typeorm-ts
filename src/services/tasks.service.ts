import { AppDataSource } from "../db/config"
import { Task } from "../modules"


export const taskRepository = AppDataSource.getRepository(Task);

