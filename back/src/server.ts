import express, { Router } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use(router);

// Healthcheck para probar el server
server.get("/health", (_req, res) => res.send("OK"));

// 404 con log para ver QUÉ path estás llamando
server.use((req, res) => {
  console.warn(`[404] ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Not Found", path: req.originalUrl });
});


export default server;
