const mongoose = require("mongoose")



mongoose.connect(process.env.DB_URL,
    
         { useNewUrlParser: true, useUnifiedTopology: true }
    
)
.then(()=>{
    console.log("Connection Database");
})
.catch((err)=>{
    console.log("Not Connection Database:",err);
})