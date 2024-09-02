import mongoose from "mongoose";
import { Config } from "./config";
import { DB_NAME } from "../../constant";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("Datbase disconnected");
      setTimeout(connectDB, 5000);
    });
    mongoose.connection.on("error", () => {
      console.log("Failed to connected with database");
    });
    await mongoose.connect(`${Config.DB_URL}/${DB_NAME}`).then((data) => {
      console.log(`Connection host: ${data.connection.host}`);
    });
  } catch (error: any) {
    console.log(`Error while try to connect with database: ${error.message}`);
    setTimeout(connectDB, 5000);
    process.exit(1);
  }
};
export default connectDB;
