const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.models.js')

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/restro-dine');

app.post("/booking", (req,res)=>{
    User.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
});

app.delete('/deleteItem/:id',(req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})
app.get("/",(req,res)=>{
    User.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err));
})
app.listen(3000, ()=>{ console.log('Server is running')});