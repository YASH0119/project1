import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected");
        
        
    } catch (error) {
        console.log("mongo connection error",error);
        process.exit(1)
        
    }
}

export default connectDB