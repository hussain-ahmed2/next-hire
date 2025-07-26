import mongoose from "mongoose";

const connectDB = async () => {
	try {
		if (mongoose.connection.readyState >= 1) return;

		await mongoose.connect(process.env.MONGO_URI as string);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

export default connectDB;
