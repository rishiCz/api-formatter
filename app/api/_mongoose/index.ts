import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI
export const initMongoose = mongoose.connect(MONGO_URI!)
