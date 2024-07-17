import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log("MongoDB Connected");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }
};

export default connectDB;
