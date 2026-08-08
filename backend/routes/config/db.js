const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://keyur:yourpassword@cluster0.xxxxx.mongodb.net/");

        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ Database Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;