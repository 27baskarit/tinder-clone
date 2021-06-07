import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './models/dbCards.js';



// APP config
const app = express();
const port = process.env.PORT || 8081
const connection_url = "mongodb://localhost:27017/tinder"

// Middlewares
app.use(express.json())
app.use(Cors())
// DB config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

// API endpoint
app.get('/', (req,res) => res.status(200).send("Hello, You're in home API"))

app.get('/tinder/card', (req,res) => {
    Cards.find({}, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

})

app.post('/tinder/card', (req,res) => {
    
    const dbCard = req.body
    Cards.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

// Listner
app.listen(port , () => console.log(`Your app is running on ${port} port`))