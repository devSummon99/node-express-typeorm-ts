import { AppDataSource } from "../db/config"
import { User } from "../modules"


export const userRepository = AppDataSource.getRepository(User);

