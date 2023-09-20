const mongoose=require('mongoose');

const custSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

const cschema=mongoose.model('customer',custSchema);
module.exports=cschema;