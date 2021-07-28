<<<<<<< HEAD
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {User} from '../models/UserModel.js';
=======
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {User} from '../models/UserModel.js'
import validatePassword from '../utils/validatePassword.js'
import emailValidation from '../utils/validateEmail.js'
>>>>>>> 6e74a1394b57ccb3c39ab04e54f080c21fc4cd48


dotenv.config()

const AuthController = {
    signup: async (req, res) => {
        const {name, email, password} = req.body 

        try {
            if(!name || !email || !password) {
                return res
                .status(400)
                .json({message: 'All fields must be provided'})
            }


            if(!emailValidation(email)) {
                return res.status(400).json({message: 'Enter a valid email address'})
            }

            if(password.length < 7) {
                return res.status(400).json({message: 'Password should not be less than 7 characters'})
            }

            if(!validatePassword(password)) {
                return res.status(400).json({message: 'Password must be alphanumeric characters'})
            }

            const findUser = await User.findOne({email})

            if(findUser) {
                return res.status(400).json({message: 'User already exist. Please login'})
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt)


            if (hash) {
                const newUser = new User({ name, email, password: hash})
                const savedUser = await newUser.save()
     
                if (savedUser) {
                    jwt.sign(
                    {id: savedUser._id},
                    process.env.SECRET,
                        {expiresIn: 3600},
                        (err, token) => {
                            if (err) {
                                throw err
                            }
     
                            res.status(200).json(
                                { 
                                     status: 'success',
                                     data: {
                                         token: `Bearer ${token}`,
                                         id: savedUser._id,
                                         name: savedUser.name,
                                         email: savedUser.email,
                                     }, 
                                     message: 'successful'
                                 })
                        }
                    )
                }
            }



        } catch (err) {
            console.log(err)
            return res.status(500).json({message: 'server error'})
        }
    },

    //sign in goes here
    signIn: async (req, res) => {
        const { email, password } = req.body;
            try{
                if(!email || !password){
                return res.status(400).json({
                status: 'fail',
                message: 'Email or password cannot be empty'
            });
        } 

        const authUser = await User.findOne({email});

            if(!authUser){
                return res.status(400).json({
                    status: 'Fail',
                    message: 'User not found'
                })
            }

        const isMatch = await bcrypt.compare(password, authUser.password);
            delete isMatch.password;
            if(isMatch) {
                const payload = {
                    id: authUser.id,
                    email: authUser.email,
                };

        const authToken = await jwt.sign(payload, process.env.SECRET, {
               expiresIn: 3600,
            });

            return res.status(200).json({
               status: 'Success',
               message: 'Success',
               token: 'Bearer ' + authToken,

           });
       }

            return res.status(400).json({
                status: 'fail',
                message: 'Email or password not correct'
       })
    } 

    catch(err){
        console.log(err);
        res.status(500).json({
        status:'Fail',
        err
    })
}
   }
}


export default AuthController