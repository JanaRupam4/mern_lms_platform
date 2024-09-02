import { config as Conf } from "dotenv";
Conf();

const _config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGO_URL,
  CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_SECRET_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  REDIS_URL: process.env.REDIS_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
};
export const Config = Object.freeze(_config);
