const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Model/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/')

const PORT = process.env.PORT || 3001

app.get('/get', (req, res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.put('/update/:id', (req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id : id}, {done:true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add',(req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task : task
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(PORT, ()=>{
    console.log(`server running port ${PORT}`)
})