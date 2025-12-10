import mongoose from 'mongoose'
import express from 'express'




   function Db_connect (){
    try{
        mongoose.connect('mongodb+srv://ramkumarramar2237_db_user:Ram0427@demo-db-01.5hcx9qu.mongodb.net/?appName=Demo-DB-01')
    console.log("Database Connected")
    }
    catch(err){
        console.log(err.message)
    }
   }
export default Db_connect     

