import mongoose from "mongoose";

global.afterEach(async () => {
  await mongoose.connection.close();
});
