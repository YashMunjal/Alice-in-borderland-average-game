const express=require("express")



const app=express();
app.use(express.json());




require('./routes/index')(app);



const PORT = process.env.PORT || 3000;

app.listen(PORT, function(err){
    if (err){
     console.log("Error in server setup",err)
    }


     console.log("Server listening on Port", PORT);
})


