import { v2 as cloudinary } from "cloudinary";
import { Config } from "./config";
cloudinary.config({
  cloud_name: Config.CLOUD_NAME,
  api_secret: Config.CLOUDINARY_API_SECRET,
  api_key: Config.CLOUDINARY_SECRET_KEY,
});
export default cloudinary;
