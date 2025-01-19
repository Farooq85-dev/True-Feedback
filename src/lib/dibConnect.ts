import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number
}


const connection: connectionObject = {}

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        return console.log("Database already connected!");

    }

    try {
        const db = await mongoose.connect(process.env?.MONGODB_URI || "",)
        console.log(db);
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully!");
    } catch (error) {
        console.log(error, "Db connection failed!");
        process.exit(1);
    }
}

export default dbConnect;