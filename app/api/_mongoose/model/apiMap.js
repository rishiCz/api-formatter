import mongoose from "mongoose";

const apiMapModel = new mongoose.Schema({
  key: String,
  valApi: String,
  user: String,
});

export const ApiMap =
  mongoose.models.apiMap || mongoose.model("apiMap", apiMapModel);
