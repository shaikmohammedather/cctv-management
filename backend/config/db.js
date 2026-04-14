import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const cnct = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${cnct.connection.host}`);
  } catch (error) {
    console.error("DB connection failed :", error.message);
    process.exit(1);
  }
};
export default connectDB;
