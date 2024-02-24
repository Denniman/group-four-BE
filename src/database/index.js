import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const db = process.env.MONGO_URL


const databaseConnection = {
    getConnect: () => {
        mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('connected successfully'))
        .catch((err) => console.log(err.message))
    }
}


export default databaseConnection;



