// Use mongoose to connect to the database
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${connect.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}