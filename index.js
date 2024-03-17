const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.models.js')

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://aditya:aditya@restro-dine-tech.js3ftyl.mongodb.net/');

app.post("/booking", async(req,res)=>{
    
    await User.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
});

app.delete('/deleteItem/:id',async(req,res)=>{
    
    const id = req.params.id;
    await User.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
    
})
app.get("/",async(req,res)=>{
    
    await User.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err));
})
app.listen(3000, ()=>{ console.log('Server is running')});