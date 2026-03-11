import bcrypt from "bcrypt";
import {User} from "../models/index.js";
import { signAccessToken } from "../utils/jwt.js";
const SALT_ROUNDS = 10;
export async function register({name,email,password}) {
   const normalzeEmail = email.toLowerCase();
   const existing = await User.findOne({where: {user_email:normalzeEmail}});
   if(existing){
    return{ok:false,status: 409,error:"email already in use"};
   } 
   const paswordhash =bcrypt.hash(password,SALT_ROUNDS);
   const user = await User.create({
    name,user_email:normalzeEmail,paswordhash
   });
   const token = signAccessToken({sub: String(user.user_id,email: user.user_email)});
   return{ok: true,data:{toekn,user:{id:user,user_id,name:user.user_name}}}
}
export async function login({email,password}) {
    const normalizeEmail =email.toLowerCase();
    const user = await User.findOne({where:{user_email:normalizeEmail}});
    if(!(user)){
        return{ok:false,status:401,error:"Invalid"};
    }
    
}