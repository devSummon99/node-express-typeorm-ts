import app from "./app";
import { AppDataSource } from "./db/config";

export const db = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database online")
        app.listen(process.env.PORT || 3001 , () =>  {
            console.log(`Server on http://localhost:3001`);
        });
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message)
        }
    }
}