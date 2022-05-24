require('dotenv').config()
const express = require('express')
const app = express()
const port = 2001
const Dress = require('./models/Dress')
const mongoose = require('mongoose')

//===============connection to Database==========

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))



// setup engine
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))

//==========Middleware=========
app.use(express.urlencoded({extended:false}));
// Need to parse JSON.use Express middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log('i run for all route')
    next()
})
//====================routes===================

// Index
app.get('/dresses',(req,res)=>{
   // query model to return all fruits
   
   Dress.find({},(err,allDresses)=>{
res.render('Index',{dresses:allDresses})
console.log(req.body)  
})
})

//New element 
app.get('/dresses/new',(req,res)=>{
    res.render('New')
})
// Show the element details 
app.get('/dresses/:id', (req,res)=>{
    Dress.findById(req.params.id,(err,foundDress)=>{
        res.render('Show',{dress:foundDress})

    })
})

// Post new element in the index page
app.post('/dresses',(req,res)=>{ //MongoServerError: bad auth : Authentication failed.
   // dresses.push(req.body)    // THAT MEANS wrong password or username  , something wrong
   Dress.create(req.body,(err,createdDress)=>{
    res.redirect('/dresses')
})
  //  
})
//console.log(Dress)

app.listen(port,()=>{
    console.log('listen to 3000')
})