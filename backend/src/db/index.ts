import mongoose from "mongoose";

try {
  if (!process.env.MONGO_URI) throw new Error("Missing MONGO_URI");
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    serverSelectionTimeoutMS: 5000,
  });
  console.log("\x1b[35mMongoDB connected via Mongoose\x1b[0m");
} catch (err) {
  console.error("Failed to connect to MongoDB:", err);
  throw err;
}
