import { app } from "./src/app";
import { Config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
  try {
    await connectDB();
    const PORT = Config.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is starting: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Failed to start the sever: ${error}`);
  }
};
startServer();
