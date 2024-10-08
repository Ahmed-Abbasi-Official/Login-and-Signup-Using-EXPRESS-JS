import {userModel} from '../models/user.model.js'
import bcrypt from 'bcryptjs'

class UserController{
    static home=(req,res)=>{
        res.render('index')
    }
    static registration=(req,res)=>{
        res.render('registration')
    }

    static createUser=async(req,res)=>{
        const hashPassword=await bcrypt.hash(req.body.password,10)
        try {
            // Creating new Document Using User Model .
            const doc =await userModel.create(
                {
                    name:req.body.username,
                    email:req.body.email,
                    password:hashPassword,
                }
            )
            // Saving Document .
            console.log(doc);
            // await doc.save()
            res.render('index',{name:req.body.username})
            
        } catch (error) {
            console.log(`Error in Creating Documnet : !!! ${error}`);
            
        }
    }

    static login=(req,res)=>{
        res.render('registration')
    }


    static verifyLogin=async(req,res)=>{
        try {
            const {uemail,upassword,uname}=req.body;
            // console.log(await userModel.find());
            
            const result = await userModel.findOne({
                email:uemail,
                // password:upassword
                
            })
            if (result) {
                const encrypted=await bcrypt.compare(upassword,result.password)

               if (encrypted=== upassword) {
                res.render('index',{name:uname})
                console.log("Result of finding email :::  ",result);
               }
               else{
                res.send('Wrong Password !!!!')
               }
            }
            else{
                res.send('Invalid Email Please Enter Correct !!')
            }
            
        } catch (error) {
            console.log(`Error in Verification Login ::: !!!  ${error}`);
            
        }
    }
}

export default UserController