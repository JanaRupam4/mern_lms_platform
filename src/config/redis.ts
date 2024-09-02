import { Redis } from "ioredis";
import { Config } from "./config";
const redisClient = () => {
  const redisUrl = Config.REDIS_URL;
  if (redisUrl) {
    console.log("Redis connection successfull");
    return redisUrl;
  }
  throw new Error("Redis connection failed");
};
export const redis = new Redis(redisClient());
