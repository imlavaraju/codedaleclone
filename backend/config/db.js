const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lavaraju:nani123@apicontent.ahyirln.mongodb.net/codedaleclone?retryWrites=true&w=majority&appName=apicontent"
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
