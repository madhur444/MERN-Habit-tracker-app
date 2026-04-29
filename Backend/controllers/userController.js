import User from "./models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const   Register =  async (req,res)=>{
try {
  const {email,username,password} =   req.body

const existuser =   await  User.findOne({email: email})
  if (existuser ){
return res.status(400).json({message:"User already exist"})
  }


const hashedpassword =  await bcrypt.hash(password,10)
const newUser = await User.create({
    email,
    password:hashedpassword,
    username
  })
  res.status(201).json({message:"User has been created",newUser})
}
catch (error) {
  
res.status(500).json({message:error.message})}


}
export const Login = async (req,res)=>{
const {email,password} = req.body
const existuser = await User.findOne({email:email})

if (!existuser){
  return res.status(400).json({message:"User does not exist"})
}
const isMatch = await bcrypt.compare(password ,existuser.password)
if (!isMatch){
return  res.status(400).json({message:"incorrect password"})
}
}