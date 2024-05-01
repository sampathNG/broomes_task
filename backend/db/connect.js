const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ramuksampath5:passwords@cluster0.ffuc2lk.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
connection();
module.exports = connection;
