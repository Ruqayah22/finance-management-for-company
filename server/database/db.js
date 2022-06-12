import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.k76rd.mongodb.net:27017,cluster0-shard-00-01.k76rd.mongodb.net:27017,cluster0-shard-00-02.k76rd.mongodb.net:27017/financeMC?ssl=true&replicaSet=atlas-d1j416-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); // connection line
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
