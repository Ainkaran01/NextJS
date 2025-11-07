import mongoose from "mongoose";

const ConnectMongo = async () => mongoose.connect(process.env.Mongo_URI);
console.log("MongoDB Connected", process.env.Mongo_URI);
export default ConnectMongo;