const mongoose=require('mongoose');

const uri=process.env.DB;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log(err)
})