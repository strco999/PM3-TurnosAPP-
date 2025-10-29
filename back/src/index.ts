import { app } from "./server";
import { env } from "./config/envs";

app.listen(env.PORT, () => {
  console.log(`✅ Server listening on http://localhost:${env.PORT}`);
});
