import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch(error){
        console.error("Error connectin to MongoDB: ${error.message}");
        process.exit(1);
    }
}

export default connectDB;