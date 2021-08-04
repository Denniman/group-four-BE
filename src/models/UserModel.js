import mongoose from 'mongoose';
import validator from 'validator';


const {Schema, model} = mongoose
const { isEmail } = validator 

const userSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            validate: [isEmail, 'Enter a valid email']
        },
        password: {
            type: String,
            required: true
        },
        confirmPassword: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export const User = model('user', userSchema)

// const person = new User ({
//     name: 'Deji',
//     email: 'dejiomoloja@gmail.com',
//     password: 'food'
// });

// person.save();