const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 30000,
    });
    console.log("MONGODB is connected".cyan.underline.bold);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
