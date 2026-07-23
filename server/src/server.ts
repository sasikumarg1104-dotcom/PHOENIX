// src/server.ts

import app from "./app";
import { env } from "./config/env";

app.listen(Number(env.PORT), () => {
  console.log(`
==========================================
🔥 Phoenix Server Started Successfully
🚀 Running on: http://localhost:${env.PORT}
==========================================
`);
});