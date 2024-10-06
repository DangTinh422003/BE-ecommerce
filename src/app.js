import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import "./db/init.mongodb.js";

const app = express();

app.use(morgan("short"));
app.use(helmet());
app.use(compression());

export default app;
