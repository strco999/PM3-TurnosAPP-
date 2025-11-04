"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("./config/data-source");
var envs_1 = require("./config/envs");
var server_1 = __importDefault(require("./server"));
require("reflect-metadata");
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.info("DB Connection Estabilished");
    server_1.default.listen(envs_1.PORT, function () { return console.info("server up and running on http://localhost:".concat(envs_1.PORT)); });
})
    .catch(function (error) { return console.error(error); });
//# sourceMappingURL=index.js.map