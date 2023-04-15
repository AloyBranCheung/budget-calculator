import mongoose from "mongoose";

const connectMongoose = async () => {
  try {
    if (process.env.MONGODB_URL) {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to MongoDB");
    } else {
      console.log("Invalid URL");
    }
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connectMongoose;
