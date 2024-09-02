import express from "express";
import { ErrorMiddleware } from "./middlewares/error";
export const app = express();

app.use(ErrorMiddleware);
