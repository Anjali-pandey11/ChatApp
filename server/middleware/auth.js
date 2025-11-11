import jwt from "jsonwebtoken";
import User from "../models/User";

// Middleware to protect the route
export const protectRoute = async (req, res, next)=>{
  try {
    const token = req.header.token;
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findById(decode.userId).select("-password")

    if(!user) return res.json({success:fasle ,message:"User not found"})

     req.user = user;

     next();
    
  } catch (error) {
    console.log(error.message)
      res.json({success:fasle ,message:error.message})
  }
}