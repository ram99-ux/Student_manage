import mongoose from "mongoose";


const StudentShema=mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    department:{
        type:String,
        required:true,

    }

})

const AdminShema=mongoose.Schema({
    name:{
        type:String,
        required:true  
    },
   password:{
        type:String,
        required:true
    }
})

export const Admin=mongoose.model("Admin",AdminShema)

export default mongoose.model("Student",StudentShema)