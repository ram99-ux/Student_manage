import mongoose from 'mongoose'
import express from 'express'



const URL = process.env.MONGO_URL||"mongodb+srv://ramkumarramar2237_db_user:Ram0427@demo-db-01.5hcx9qu.mongodb.net/?appName=Demo-DB-01";




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

