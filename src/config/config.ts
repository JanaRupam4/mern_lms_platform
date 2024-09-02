import { config as Conf } from "dotenv";
Conf();

const _config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGO_URL,
};
export const Config = Object.freeze(_config);
