"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const envs_1 = require("./config/envs");
server_1.app.listen(envs_1.env.PORT, () => {
    console.log(`✅ Server listening on http://localhost:${envs_1.env.PORT}`);
});
//# sourceMappingURL=index.js.map