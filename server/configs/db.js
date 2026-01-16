import mongoose from 'mongoose';

const connectDB = async () =>{
    console.log(process.env.MONGO_URI);  
    try {
        mongoose.connection.on('connected', ()=>{
            console.log("Database Connected 🟢")
        })
        await mongoose.connect(`${process.env.MONGO_URI}/grocery`)
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;