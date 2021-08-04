import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// const db = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.t3hjt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
// const db = `mongodb+srv://NewUser:${process.env.DATABASE_PASSWORD}@cluster0.wx9vk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const db = `mongodb://localhost:27017/foodDB`


const databaseConnection = {
    getConnect: () => {
        mongoose
        .connect(process.env.DBURL || db, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('connected successfully'))
        .catch((err) => console.log(err.message))
    }
}


export default databaseConnection;



