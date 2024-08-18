
// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors  from 'cors';


const app = express();
app.use((cors));

const PORT = process.env.PORT || 4000;

//use mongoose

mongoose.connect("mongodb+srv://pp4537152:r32rIhPGwxqemCcM@cluster2.20fem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2", {dbName:"Tickets"}).then(res=>console.log("mongodb server connected"))

// Define a route
app.get("/getData",(req,res)=>{
    res.send("hello")
});

app.post('/router',(res)=>{
    res.send("hi");
});

app.get("/",(req,res)=>{
    res.send("login your account");
});

app.get("/" ,(req,res)=>{
    res.send("singin your account");
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


