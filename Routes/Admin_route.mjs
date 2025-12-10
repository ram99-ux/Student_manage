import express from 'express';
import {Admin} from '../DB/Shema.mjs';

const router=express.Router();

// Admin Login


router.get('/api/admins',async(req,res)=>{
    try{
        const admins=await Admin.find();
        res.send(admins);
    }   
    catch(err){
        res.status(500).send({msg:"Server Error"})
    }
})

router.post('/api/admin/login',async(req,res)=>{
    try{
        const {name,password}=req.body;
        const admin=await Admin.findOne({ name:name,password:password});
        if(!admin){
            return res.status(401).send({msg:"Invalid Credentials"})
        }
        res.send({msg:"Login Successful"})
    }
    catch(err){
        res.status(500).send({msg:"Server Error"})
    }
});

export default router;

       

