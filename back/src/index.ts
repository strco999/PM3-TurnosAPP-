import { AppDataSource } from "./config/data-source";
import {PORT} from "./config/envs";
import server from "./server";
import "reflect-metadata"

AppDataSource.initialize()
   .then(()=>{
    console.info("DB Connection Estabilished");
    server.listen(PORT, () => console.info(`server up and running on http://localhost:${PORT}`));
   })
   .catch((error: unknown)=> console.error(error));


