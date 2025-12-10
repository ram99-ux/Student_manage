import mongoose from 'mongoose'
import express from 'express'
const URL = process.env.MONGO_URL;




   function Db_connect (){
    try{
        mongoose.connect(URL)
    console.log("Database Connected")
    }
    catch(err){
        console.log(err.message)
    }
   }
export default Db_connect     

