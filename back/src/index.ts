import {PORT} from "./config/envs";
import server from "./server";

server.listen(PORT, () => console.info("server up and running on http:localhost:${PORT}"));

